import React, { useRef, useState } from 'react';
import { sliderLists } from '../../constants';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
const Menu = () => {
    const contentRef=useRef()
    const[currentIndex,setCurrentIndex] = useState(0)
    const totalCocktails = sliderLists.length;
    const goToSlide=(index)=>{
        const newIndex = (index+totalCocktails) % totalCocktails;
        setCurrentIndex(newIndex)
    }

    const getCocktailAt=(indexOffset)=>{
        return sliderLists[(currentIndex+indexOffset+totalCocktails)%totalCocktails]
    }
    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1)
    const nextCocktail = getCocktailAt(1)
    useGSAP(()=>{
    gsap.fromTo("#title",{opacity:0,y:"30%"},{opacity:1,y:'0',duration:1})
    gsap.from(".details",{opacity:0,x:200,duration:.5})
    const descSplit = SplitText.create(".currentDescription",{
        type:'lines'
    })
    gsap.from(descSplit.lines,{
        y:200,
        delay:.5,
        stagger:.05,
        ease:"power1.inOut"
    })
    gsap.from(".cocktail img",{opacity:0,x:-200,scale:0.5,duration:1,})
    },[currentIndex])
    return (
        <section aria-labelledby='menu-heading' id='menu'>
            <img src="/images/slider-left-leaf.png" alt="leaf-leaf" id='m-leaf-leaf'/>
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf'/>
            <h2 id='menu-heading' className='sr-only'>
                Cocktail Menu
            </h2>
            <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
                {
                    sliderLists.map((cocktail,i)=>{
                        const isActive = i===currentIndex
                        return <button key={cocktail.id} className={
                            `${isActive? "text-white border-white" : 'border-white text-white/50'}`
                        } onClick={()=>goToSlide(i)}>
                            {cocktail.name}
                        </button>
                    })
                }
            </nav>
            <div className="content">
                <div className=" arrows ">
                    <button className="text-left" 
                    onClick={()=>goToSlide(currentIndex-1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden='true'/>
                    </button>

                    {/* next btn */}
                    <button className="text-right" 
                    onClick={()=>goToSlide(currentIndex+1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden='true'/>
                    </button>
                </div>
                <div className="cocktail">
                    <img src={currentCocktail.image} className='object-contain' />
                </div>
                <div className="recipe w-10/12 mx-auto ">
                    <div ref={contentRef} className='info'>
                    <p>Recipe for :</p>
                    <p id='title'>{currentCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p className='currentDescription'>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;
