import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap  from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    const videoRef = useRef()

    const isMobile = useMediaQuery({maxWidth:767})
    useGSAP(()=>{
        const heroSplit = new SplitText('.title',{type:'chars, words'})
        const paragraphSplit = new SplitText('.subtitle',{type:'lines'})
        heroSplit.chars.forEach((char)=>char.classList.add("text-gradient"))
        gsap.from(heroSplit.chars,{
            yPercent:100,
            duration:1.8,
            opacity:0,
            ease:"expo.out",
            stagger:.06
        })
        gsap.from(paragraphSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1.8,
            ease:"expo.out",
            stagger:.06,
            delay:1
        })

        //leaf time line
        gsap.timeline({
            scrollTrigger:{
                trigger:"#hero",
                start:"top top",
                end:"bottom top",
                scrub:true
            }
        })
        .to(".left-leaf",{y:-200},0)
        .to(".right-leaf",{y:200},0)

        const start =isMobile ? 'top 50%' : 'center 60%'
        const end = isMobile ? '120% top':'bottom top'

        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:'video',
                start,
                end,
                scrub:true,
                pin:true
            }
        })

        videoRef.current.onloadedmetadata=()=>{
            tl.to(videoRef.current,{
                currentTime:videoRef.current.duration
            })
        }


    },[])
    return (
       <>
        <section id='hero'  className='noisy'>
            <h1 className='title'>MOJITO</h1>
        <img src="/images/hero-left-leaf.png" alt="left leaf" 
        className='left-leaf'/>    
         <img src="/images/hero-right-leaf.png" alt="right leaf" 
        className='right-leaf'/>  

        {/* {body} */}
        <div className="body">
            <div className="content">
                <div className=" space-y-5 md:block hidden ">
                    <p>Cool. Crisp. Classic</p>
                    <p className="subtitle">Sip the Sprit <br />
                    of Summer</p>
                </div>
                <div className='view-cocktails'>
                    <p className='subtitle'
                    >Every cocktail on your menu is a blend of premium ingredient,creative,fair and timeless recipes-designed to delight your senses.</p>
                    <a href="#cocktails">view cocktails</a>
                </div>
            </div>
        </div>
        </section>
        <div className="video absolute inset-0">
            <video ref={videoRef}
             src="/videos/output.mp4" muted playsInline preload="true" />
        </div>
       </>
    );
}

export default Hero;
