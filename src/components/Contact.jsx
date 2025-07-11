import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
    useGSAP(()=>{
        const titleSplit = SplitText.create("#contact h2",{
            type:'words'
        })
        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:'top center',
                
            },
            ease:'power1.inOut'
        })
        timeline.from(titleSplit.words,{
            opacity:0,
            yPercent:100,
            stagger:.02
        })
        .from("#contact h3",{opacity:0,
            yPercent:100,
            stagger:.02})
        .to('#f-right-leaf',{
            y:'-50',
            duration:1,
            ease:"power1.inOut"
        })
        .to("#f-left-leaf",{
            y:'-50',
            duration:1,
            ease:'power1.inOut'
        },'<')
    },[])
    return (
        <footer id='contact'>
            <img src="/images/footer-right-leaf.png" alt="f-right-leaf" id='f-leaf-right'/>
            <img src="/images/footer-left-leaf.png" alt="f-right-leaf" id='f-right-leaf'/>
            <div className="content">
                <h2>where to find us</h2>
                <div>
                    <h3>visit our Bar</h3>
                    <p>456,Raq Blvd. #404,Los Angeles,CA 90210</p>

                </div>
                <div>
                    <h3>Contact us</h3>
                    <p>(555) 987-6543</p>
                    <p>hello@jsmcocktail.com</p>
                </div>
                <div>
                    <h3>
                        open every day
                    </h3>
                    {
                        openingHours.map((time)=>{
                            return <p key={time.day}>{time.day}-{time.time}</p>
                        })
                    }
                </div>
                <div>
                    <h3>socials</h3>
                </div>
                <div className="flex-center gap-5">
                    {socials.map((social)=>(
                        <a href={social.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        area-label={social.name}
                        key={social.name}>
                            <img src={social.icon} alt="" />
                        </a>

                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Contact;
