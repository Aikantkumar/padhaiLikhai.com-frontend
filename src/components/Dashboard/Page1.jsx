import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Lenis from 'lenis'
import gsap from 'gsap-trial';
// import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css'



const page1 = () => {



  gsap.registerPlugin(ScrollTrigger);

  //here useRef is used to target 2 types of div's i.e one which is a circle and another is that div on which when we hover we are able to see the circle
  const cursorcircleref = useRef(null);
  // const pagea1Ref = useRef(null);
  const pagea2Ref = useRef(null);
  const pagea3Ref = useRef(null);
  const pagea8Ref = useRef(null);
  const pagea9Ref = useRef(null);
  const pagea101Ref = useRef(null);
  // const pagea102Ref = useRef(null);
  // const pagea103Ref = useRef(null);
  const pagea11Ref = useRef(null);
  const [maskImage, setMaskImage] = useState('none');

  const navigate = useNavigate();


  const handlegetstarted = () => {
    navigate("/login")
  }





  useEffect(() => {

    // **************************************function for lenis, gsap and scrolltrigger

    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      // easing:(t) => t * (2-t),
      easing: (t) => t * (2 - t),
      smoothWheel: true,
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: true,
      touchMultiplier: 2,
    });

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // <!-- pages move together- black -->                                 
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".pagea1",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true.,
      }
    })

    //  pagea3-black moves and pagea4-white stays still
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".pagea3",
        start: "top top",
        end: "bottom 70%", //615- full screen
        scrub: true,
        // markers: true,
        pin: ".pagea4",

      }
    });

    // <!-- pages move together- white -->                                 
    // const tl4 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".pagea4",
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: true,
    //     // markers: true.,
    //   }
    // })


    // pagea7 will remain still and the pagea8 will move over it.
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".pagea7",
        start: "top top",
        end: "bottom 50%",
        scrub: true,
        // markers: true,
        pin: ".pagea7",

        // position: absolute
      }
    })

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page7",
        start: "top top",
        end: "1600 bottom",
        scrub: true,
        // markers: true,
        pin: ".images",
      }
    })

    // ****************timeline only for the text "make your move"
    const tl10 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page6",
        start: "-300 top",
        end: "1000 top",
        scrub: true,
        // markers: true,
        // pin:".page6"
      }
    })
    // *******************

    // ****************tijmeline for sideboxes on white pages
    // const tl11 = gsap.timeline({
    //   ScrollTrigger : {
    //     trigger:".page4-2-1",
    //     start:"top top",
    //     end:"bottom top",
    //     scrub: true,
    //     markers: true
    //   }
    // })

    // tl1.to(".pagea1", {yPercent:-1, duration:1})       
    //    .to(".pagea2",  {yPercent:-1, duration:1})
    //    .to(".pagea3",  {yPercent:-1, duration:1},"<")

    tl2.fromTo(".pagea3", { yPercent: 0 }, { yPercent: -100, duration: 2 })
      .fromTo(".pagea4", { yPercent: 0 }, { yPercent: 0, duration: 1 }, "<");



    // tl4.to(".pagea4", {yPercent:-1, duration:1})       
    //    .to(".pagea5",  {yPercent:-1, duration:1})
    //    .to(".pagea6",  {yPercent:-1, duration:1})
    //    .to(".pagea7",  {yPercent:-1, duration:1},"<");

    // tl3.fromTo(".pagea7", { yPercent: 0 }, { yPercent:0, duration:1 })
    tl3.to(".pagea8", { yPercent: -100 })

    tl5.to(".page7", { yPercent: -1 })
    tl5.to(".images", { yPercent: 0 }, "<")

    tl10.fromTo(".textmake", { xPercent: 120 }, { xPercent: -100 })

    // tl11.fromTo(".sidebox1", {xPercent:0}, {xPercent: -100})

    // gsap.to(".textmake", {
    //    transform: "translateX(-" + (window.outerWidth - 1000) + "px)",
    //   ScrollTrigger:{
    //       trigger:".page6",
    //       start:"top top",
    //       end:"bottom top",
    //       scrub: true
    //   }

    // })



    // ***************************************gsap, scrolltrigger, 


    // ***************************************************function{javascript} for circle which follows the cursor

    //here useRef is used to target 2 types of div's i.e one which is a circle and another is that div on which when we hover we are able to see the circle

    const cursorcircle = cursorcircleref.current
    // const refs = [pagea1Ref, pagea2Ref, pagea3Ref, pagea4Ref, pagea5Ref, pagea6Ref, pagea7Ref, pagea101Ref, pagea102Ref, pagea103Ref, pagea11Ref]
    // const pageaa1 = pagea1Ref.current
    const pageaa2 = pagea2Ref.current
    const pageaa3 = pagea3Ref.current
    const pageaa101 = pagea101Ref.current
    // const pageaa102 = pagea102Ref.current
    // const pageaa103 = pagea103Ref.current
    const pageaa11 = pagea11Ref.current

    // console.log(cursorcircleref.current); // Should not be null
    // console.log(experienceref.current); // Should not be null


    // Function to show the circle and move it with the cursor
    // This function updates the position of the circle element to follow the cursor. event.pageX and event.pageY give the current cursor position on the page, which we use to set the left and top CSS properties of the circle.
    const moveCircle = (event) => {
      // console.log("hlo aikant ji no.1")
      cursorcircle.style.left = `${event.pageX}px`
      cursorcircle.style.top = `${event.pageY}px`

      // refs.forEach(ref => {
      //   if(ref.current){
      //     const maskImage = `radial-gradient(circle 175px at ${event.clientX - ref.current.getBoundingClientRect().left}px ${event.clientY - ref.current.getBoundingClientRect().top}px, transparent 175px, rgba(0,0,0, 1) 175px)`;
      //     // console.log(`mask image ${ref.current.className}`,maskImage)
      //     setMaskImage(maskImage)
      //   }
      // })

      // pageaa1.style.maskImage = `radial-gradient(circle 175px at ${event.clientX - pageaa1.getBoundingClientRect().left}px ${event.clientY - pageaa1.getBoundingClientRect().top}px, transparent 175px, rgba(0,0,0, 1) 175px)`
      pageaa2.style.maskImage = `radial-gradient(circle 175px at ${event.clientX - pageaa2.getBoundingClientRect().left}px ${event.clientY - pageaa2.getBoundingClientRect().top}px, transparent 175px, rgba(0,0,0, 1) 175px)`
      pageaa3.style.maskImage = `radial-gradient(circle 175px at ${event.clientX - pageaa3.getBoundingClientRect().left}px ${event.clientY - pageaa3.getBoundingClientRect().top}px, transparent 175px, rgba(0,0,0, 1) 175px)`
      pageaa101.style.maskImage = `radial-gradient(circle 175px at ${event.clientX - pageaa101.getBoundingClientRect().left}px ${event.clientY - pageaa101.getBoundingClientRect().top}px, transparent 175px, rgba(0,0,0, 1) 175px)`
      // pageaa102.style.maskImage = `radial-gradient(circle 175px at ${event.clientX - pageaa102.getBoundingClientRect().left}px ${event.clientY - pageaa102.getBoundingClientRect().top}px, transparent 175px, rgba(0,0,0, 1) 175px)`
      // pageaa103.style.maskImage = `radial-gradient(circle 175px at ${event.clientX - pageaa103.getBoundingClientRect().left}px ${event.clientY - pageaa103.getBoundingClientRect().top}px, transparent 175px, rgba(0,0,0, 1) 175px)`
      pageaa11.style.maskImage = `radial-gradient(circle 175px at ${event.clientX - pageaa11.getBoundingClientRect().left}px ${event.clientY - pageaa11.getBoundingClientRect().top}px, transparent 175px, rgba(0,0,0, 1) 175px)`

    };

    // Function to show the circle when hovering over the entire page
    const showCircle = () => {

      cursorcircle.style.display = 'block';
      document.addEventListener('mousemove', moveCircle); // this will update the coordinates of the circle wrt the cursor

    }


    const enlargeCircle = (event) => {
      cursorcircle.style.width = "100px";
      cursorcircle.style.height = "100px";


      // refs.forEach(ref => {
      //   if(ref.current){
      //     // `radial-gradient(circle 175px at ${event.clientX - ref.current.getBoundingClientRect().left}px ${event.clientY - ref.current.getBoundingClientRect().top}px, transparent 175px, rgba(0, 0, 0, 1) 175px)`
      //     const maskImage = `radial-gradient(circle 175px at ${event.clientX - ref.current.getBoundingClientRect().left}px ${event.clientY - ref.current.getBoundingClientRect().top}px, transparent 175px, rgba(0, 0, 0, 1) 175px)`;
      //     setMaskImage(maskImage)
      //   }
      // })

      // pageaa1.style.maskImage = `radial-gradient(circle 175px at ${event.clientX - pageaa1.getBoundingClientRect().left}px ${event.clientY - pageaa1.getBoundingClientRect().top}px, transparent 175px, rgba(0,0,0, 1) 175px)`
      pageaa2.style.maskImage = `radial-gradient(circle 175px at ${event.clientX - pageaa2.getBoundingClientRect().left}px ${event.clientY - pageaa2.getBoundingClientRect().top}px, transparent 175px, rgba(0,0,0, 1) 175px)`
      pageaa3.style.maskImage = `radial-gradient(circle 175px at ${event.clientX - pageaa3.getBoundingClientRect().left}px ${event.clientY - pageaa3.getBoundingClientRect().top}px, transparent 175px, rgba(0,0,0, 1) 175px)`
      pageaa101.style.maskImage = `radial-gradient(circle 175px at ${event.clientX - pageaa101.getBoundingClientRect().left}px ${event.clientY - pageaa101.getBoundingClientRect().top}px, transparent 175px, rgba(0,0,0, 1) 175px)`
      // pageaa102.style.maskImage = `radial-gradient(circle 175px at ${event.clientX - pageaa102.getBoundingClientRect().left}px ${event.clientY - pageaa102.getBoundingClientRect().top}px, transparent 175px, rgba(0,0,0, 1) 175px)`
      // pageaa103.style.maskImage = `radial-gradient(circle 175px at ${event.clientX - pageaa103.getBoundingClientRect().left}px ${event.clientY - pageaa103.getBoundingClientRect().top}px, transparent 175px, rgba(0,0,0, 1) 175px)`
      pageaa11.style.maskImage = `radial-gradient(circle 175px at ${event.clientX - pageaa11.getBoundingClientRect().left}px ${event.clientY - pageaa11.getBoundingClientRect().top}px, transparent 175px, rgba(0,0,0, 1) 175px)`

    }
    const hideorangeCircle = () => {
      cursorcircle.style.width = "0px"
      cursorcircle.style.height = "0px"
    }

    // function to diminish the size of the circle again
    const diminishCircle = () => {
      cursorcircle.style.width = "30px";
      cursorcircle.style.height = "30px";

      setMaskImage('none')
    }


    document.addEventListener("mouseenter", showCircle)
    document.addEventListener("mousemove", moveCircle)

    // refs.forEach(ref => {        
    //   if(ref.current){
    //     console.log(`adding event listeners to ${ref.current.className}`)
    //     ref.current.addEventListener("mouseenter", enlargeCircle)
    //     ref.current.addEventListener("mouseenter", hideorangeCircle)
    //     ref.current.addEventListener("mouseleave", diminishCircle)
    //     console.log("hlo aikant ji")
    //   }
    // })

    // pageaa1.addEventListener("mouseenter", enlargeCircle)
    // pageaa1.addEventListener("mouseenter", hideorangeCircle)
    // pageaa1.addEventListener("mouseleave", diminishCircle)

    pageaa2.addEventListener("mouseenter", enlargeCircle)
    pageaa2.addEventListener("mouseenter", hideorangeCircle)
    pageaa2.addEventListener("mouseleave", diminishCircle)

    pageaa3.addEventListener("mouseenter", enlargeCircle)
    pageaa3.addEventListener("mouseenter", hideorangeCircle)
    pageaa3.addEventListener("mouseleave", diminishCircle)

    pageaa101.addEventListener("mouseenter", enlargeCircle)
    pageaa101.addEventListener("mouseenter", hideorangeCircle)
    pageaa101.addEventListener("mouseleave", diminishCircle)

    // pageaa102.addEventListener("mouseenter", enlargeCircle)
    // pageaa102.addEventListener("mouseenter", hideorangeCircle)
    // pageaa102.addEventListener("mouseleave", diminishCircle)

    // pageaa103.addEventListener("mouseenter", enlargeCircle)
    // pageaa103.addEventListener("mouseenter", hideorangeCircle)
    // pageaa103.addEventListener("mouseleave", diminishCircle)

    pageaa11.addEventListener("mouseenter", enlargeCircle)
    pageaa11.addEventListener("mouseenter", hideorangeCircle)
    pageaa11.addEventListener("mouseleave", diminishCircle)





    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      lenis.destroy();

      // Cleanup event listener when element unmount
      document.removeEventListener("mousemove", moveCircle)
      document.removeEventListener("mouseenter", showCircle)


      // refs.forEach(ref => {
      //   ref.current.removeEventListener("mouseenter", enlargeCircle)
      //   ref.current.removeEventListener("mouseleave", diminishCircle)
      //   ref.current.removeEventListener("mouseenter", hideorangeCircle)
      //   console.log("kese ho aikant ji")
      // })

      // pageaa1.removeEventListener("mouseenter", enlargeCircle)
      // pageaa1.removeEventListener("mouseenter", hideorangeCircle)
      // pageaa1.removeEventListener("mouseleave", diminishCircle)

      pageaa2.removeEventListener("mouseenter", enlargeCircle)
      pageaa2.removeEventListener("mouseenter", hideorangeCircle)
      pageaa2.removeEventListener("mouseleave", diminishCircle)

      pageaa3.removeEventListener("mouseenter", enlargeCircle)
      pageaa3.removeEventListener("mouseenter", hideorangeCircle)
      pageaa3.removeEventListener("mouseleave", diminishCircle)

      pageaa101.removeEventListener("mouseenter", enlargeCircle)
      pageaa101.removeEventListener("mouseenter", hideorangeCircle)
      pageaa101.removeEventListener("mouseleave", diminishCircle)

      // pageaa102.removeEventListener("mouseenter", enlargeCircle)
      // pageaa102.removeEventListener("mouseenter", hideorangeCircle)
      // pageaa102.removeEventListener("mouseleave", diminishCircle)

      // pageaa103.removeEventListener("mouseenter", enlargeCircle)
      // pageaa103.removeEventListener("mouseenter", hideorangeCircle)
      // pageaa103.removeEventListener("mouseleave", diminishCircle)

      pageaa11.removeEventListener("mouseenter", enlargeCircle)
      pageaa11.removeEventListener("mouseenter", hideorangeCircle)
      pageaa11.removeEventListener("mouseleave", diminishCircle)

    };



    // SOME QUICK NOTES:
    //     maskImage Property: element.style.maskImage sets the CSS mask image property of the element. This property allows you to create a masking effect using images, gradients, or other CSS techniques.

    // radial-gradient:

    // radial-gradient is a type of gradient that radiates outwards from a central point, forming a circle or ellipse.

    // circle 75px:

    // circle 75px specifies that the gradient will form a circle with a radius of 75 pixels.

    // at ${e.clientX - element.getBoundingClientRect().left}px ${e.clientY - element.getBoundingClientRect().top}px:

    // at ${e.clientX - element.getBoundingClientRect().left}px ${e.clientY - element.getBoundingClientRect().top}px sets the center of the circle at the position of the cursor within the element.

    // e.clientX gives the X-coordinate of the cursor relative to the viewport.

    // e.clientY gives the Y-coordinate of the cursor relative to the viewport.

    // element.getBoundingClientRect().left gives the X-coordinate of the element's left edge relative to the viewport.

    // element.getBoundingClientRect().top gives the Y-coordinate of the element's top edge relative to the viewport.

    // The difference (e.clientX - element.getBoundingClientRect().left and e.clientY - element.getBoundingClientRect().top) gives the X and Y coordinates of the cursor within the element.

    // transparent 75px, rgba(0, 0, 0, 1) 75px:

    // This part defines the colors and stop points for the radial gradient.

    // transparent 75px means the gradient will be transparent within the circle of radius 75 pixels centered at the cursor position.

    // rgba(0, 0, 0, 1) 75px means the color will be solid black outside the circle.

  }, []);







  return (
    <>
      <div ref={cursorcircleref} className="cursor-circle"></div>
      <div className='pagea1 '>

        <div className='page1 flex flex-row justify-between h-screen bg-[#0D0D0D] relative z-10' >

          <div className='logo1 p-10 text-gray-400  w-[15vw]  relative z-10'>
            hnjii
          </div>


          <div className='hero justify-center  relative z-10 pointer-events-auto '   >
            <div>

              <div className='text-[150px] poppins-medium mb-[-100px] text-[#B8A895] flex align-middle justify-center'>padhaiLikhai</div>
              <div className='text-[100px] poppins-medium my-0 ml-[624px] text-[#E94B35] flex align-middle '>.com</div>
            </div>

            <div className='text-[#B8A895] mt-[70px]  text-center'>
              <div className='text-[25px] tracking-tighter'>Discover the ultimate platform you always needed but didn't realize you wanted so badly.</div>
              <div className='text-[20px] tracking-[2px]'>Struggling to find good teachers nearby? </div>
              <div className='text-[20px] tracking-[2px]'>Never interacted with achievers, mentors, and seniors?</div>
              <div className='text-[20px] tracking-[1.5px]'>Not surrounded by a competitive peer group? Unaware of the standards you should meet?</div>
              <div className='text-[30px] pt-[30px]  tracking-[3px] text-[#E94B35]'>Then Come, let us show you...</div>
            </div>
          </div>
          {/* orange div */}
          {/* <div className='page1 flex  justify-center  h-[100vh] bg-[#E94B35] text-[#0D0D0D] absolute top-0 w-[100%] opacity-1'>

              <div className='hero justify-center '>
                <div className='text-[150px] poppins-medium mb-[-100px] flex align-middle justify-center'>padhaiLikhai</div>
                <div className='text-[100px] poppins-medium my-0 ml-[624px]  flex align-middle '>.com</div>
              </div>
            </div> */}





          <div className='login text-gray-400   w-[15vw] pl-20 pt-8 '>
            <ul className='p-0 '>
              <div className='w-[10vw] flex flex-col align-bottom items-end pr-[60px] z-10' >

                <li className='flex flex-col mb-1 tracking-[10px] font-semibold '> about </li>
                <li className='flex flex-col mb-1 tracking-[10px] font-semibold '> more </li>
                <li onClick={handlegetstarted} className='bg-[#E94B35] mt-1  px-3 py-1 flex justify-center w-[120px] font-semibold border-[1px] border-gray-400 text-black rounded-md'> get started </li>
              </div>
            </ul>
          </div>
        </div>
        {/* orange div */}
        <div className='page1 flex  justify-center  h-[100vh] bg-[#E94B35] text-[#0D0D0D] absolute top-0 w-[100%] opacity-1'>
          <div className='hero justify-center '>
            <div className='text-[150px] poppins-medium mb-[-100px] flex align-middle justify-center'>padhaiLikhai</div>
            <div className='text-[100px] poppins-medium my-0 ml-[624px]  flex align-middle '>.com</div>
          </div>
        </div>


      </div>

      <div className='pagea2'>
        <div className='relative  bg-[#0D0D0D]  ' >
          <div className="page2 flex flex-col items-center justify-center h-screen w-[100%]  bg-[#0D0D0D] relative  z-10" ref={pagea2Ref} style={{ maskImage: maskImage }}>
            <p className=' mb-5 w-[100%] pl-[140px] text-[#B7AB98]  tracking-[10px] '> about us</p>

            <div className=' pl-2 text-[60px]  gap-[2px] tracking-[-5px] font-semibold flex flex-col  justify-center' >
              <div className='line1 flex flex-row my-[-5px] mb-[-30px]'>
                <p className='text-[#B8A895]'>We are providing a</p>
                <p className='pl-[7px] text-[#E94B35]'>platform</p>
                <p className=' pl-[7px] text-[#B7AB98]'>where</p>
              </div>

              <div className='line2 flex flex-row my-[-5px] mb-[-30px]'>
                <p className='text-[#B8A895]'>passionate teachers and eager students can</p>


              </div>

              {/* <div className='line3 flex flex-row my-[-5px]  mb-[-30px]'>
                <p className='text-[#B8A895]'> Teachers can register and</p>


              </div> */}

              <div className='line4 flex flex-row my-[-5px] mb-[-30px]'>
                <p className='text-[#B8A895]'>connect. Teachers can register and students</p>

              </div>

              <div className='line4 flex flex-row my-[-5px] mb-[-30px]'>
                <p className='text-[#B8A895]'> can choose their mentors. We foster vibrant </p>

              </div>
              <div className='line4 flex flex-row my-[-5px] mb-[-30px]'>
                <p className='text-[#B8A895]'>communities, where juniors and seniors interact.</p>

              </div>

              {/* <div className='line4 flex flex-row my-[-5px] '>
                <p className='text-[#B8A895]'>students have the freedom to choose their mentors</p>

              </div> */}

            </div>
          </div>


        </div>
        {/* orange div */}
        <div className='flex flex-col items-center absolute top-[102vh] w-[100%] opacity-1 bg-[#E94B35] text-[#0D0D0D]'>
          <div className="page2 pt-36 h-screen  ">
            <p className=' mb-5 w-[100%] pl-[10px] tracking-[10px] '> about us</p>

            <div className=' pl-2 text-[60px]  gap-[2px] tracking-[-5px] font-semibold flex flex-col  justify-center' >
              <div className='line1 flex flex-row my-[-5px] mb-[-30px]'>
                <p className=''>We are providing a</p>
                <p className='pl-[5px] '>platform</p>
                <p className=' pl-[5px] '>where</p>
              </div>

              <div className='line2 flex flex-row my-[-5px] mb-[-30px]'>
                <p className=''>passionate teachers and eager students can</p>


              </div>

              {/* <div className='line3 flex flex-row my-[-5px]  mb-[-30px]'>
    <p className='text-[#B8A895]'> Teachers can register and</p>


  </div> */}

              <div className='line4 flex flex-row my-[-5px] mb-[-30px]'>
                <p className=''>connect. Teachers can register and and students</p>

              </div>

              <div className='line4 flex flex-row my-[-5px] mb-[-30px]'>
                <p className=''> can choose their mentors. We foster vibrant </p>

              </div>
              <div className='line4 flex flex-row my-[-5px] mb-[-30px]'>
                <p className=''>communities, where juniors and seniors interact.</p>

              </div>

              {/* <div className='line4 flex flex-row my-[-5px] '>
    <p className='text-[#B8A895]'>students have the freedom to choose their mentors</p>

  </div> */}

            </div>
          </div>


        </div>
      </div>



      <div className='pagea3  absolute z-10 left-0 right-0'>
        <div className="page3 h-[110vh] bg-[#0D0D0D] relative z-10" ref={pagea3Ref} style={{ maskImage: maskImage }}>
          <div className='text-[200px] tracking-[-15px]  text-[#B8A895]'>have a</div>
          <div className='text-[200px] tracking-[-15px] mt-[-100px] text-[#B8A895]'>look at</div>
          <div className='text-[200px] tracking-[-15px] mt-[-100px]  text-[#E94B35]'>THE FEATURES</div>
        </div>
        {/* ORANGE DIV */}
        <div className="page3-2 h-[110vh] bg-[#E94B35] text-[#0D0D0D] absolute top-[0vh] w-[100%] opacity-1">
          <div className='text-[200px] tracking-[-15px] '>have a</div>
          <div className='text-[200px] tracking-[-15px] mt-[-100px] '>look at</div>
          <div className='text-[200px] tracking-[-15px] mt-[-100px] '>THE FEATURES</div>
        </div>
      </div>

      <div className='pagea4 texthover relative '> {/*texthover*/}
        <div className="  page4 texthover h-screen relative  pl-[15vw] bg-white  text-black flex items-start text-center justify-center flex-col z-10 " >
          <div className="feature1  tracking-[10px]"> FEATURE 1 </div>
          <div className='texthover text-[120px] mb-[-45px] font-bold  tracking-[-5px]'>select</div>
          <div className='texthover text-[120px] mt-[-50px] font-bold  tracking-[-5px]'>your</div>
          <div className='texthover text-[120px] mt-[-50px] font-bold  tracking-[-5px]'>TEACHERS</div>
        </div>
        {/* orange div */}
        <div className='page4-2-1 bg-[#E94B35] flex flex-row absolute top-[0vh] w-[100%] opacity-1 overflow-hidden'>
          <div className='left w-[50vw] pt-10 pl-5'>
            {/* <div className='topic mb-1  tracking-[10px]'> topic </div>
            <div className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta ducimus dolorum perferendis molestias dolor. Officiis aliquid veritatis asperiores, a obcaecati eos autem ipsa. Recusandae in harum quos similique, doloribus adipisci, fugiat blanditiis nesciunt eum ab voluptatum. Fuga quam ullam perspiciatis repudiandae illum suscipit vel? Architecto ipsa laboriosam ea sed facere delectus maxime sint provident eveniet iste beatae, harum nemo iure neque blanditiis mollitia incidunt eius quas aspernatur non at! Nostrum doloremque quos a ipsam, praesentium tempora reprehenderit autem, fuga et, quisquam omnis. Rerum, similique nesciunt ducimus suscipit excepturi repellendus inventore tenetur corporis, voluptas distinctio optio, magni veritatis repellat nisi? Voluptatibus corrupti dolores nemo sunt repellendus cum odit architecto, amet laudantium aperiam quae repellat vitae nihil pariatur quibusdam rem fugit error in, minima maxime. Earum sed aliquid asperiores possimus accusantium dolorem voluptate, nihil illo esse assumenda libero atque quis voluptates non nisi obcaecati dolor molestiae inventore temporibus animi nam quidem error eligendi odit. Corrupti ex, fugit aperiam explicabo dolorem amet sint minus dolor quam. Deleniti minus accusantium facilis ullam voluptate sapiente vel rem error eos tenetur, dolores at sequi labore molestiae atque soluta nulla excepturi veritatis. Aliquam repellendus, exercitationem deserunt molestiae beatae cupiditate molestias, cumque facere tempora, aperiam odio. Eos.</div> */}
          </div>

          {/* <div className='right w-[50vw]'>some laptop and computer images</div> */}
        </div>

        <div className="sidebox1 w-[50vw] h-[80vh]  absolute z-20 top-[10vh] ml-[-55vw] ">
          <div className='tracking-[10px]'>select you teachers</div>
          <div className='extra text-[40px] font-semibold tracking-[-3px] mb-[-25px]'>
            <div className='mb-[-20px]'>Not able to find a good teacher</div>
            <div> in your <strong className='text-lime-400 pr-1'>neighbourhood</strong> ?</div>
          </div>
          <div className=' extra text-[60px] font-bold tracking-[-3px] mb-[-30px]'>find a teacher who suits</div>
          <div className=' extra text-[60px] font-bold tracking-[-3px] mb-[20px] '>you best</div>
          <div className="bulletpoints tracking-[3px] pl-[10px] text-white font-light text-[20px]">
            <ol>
              <li>&bull; Choose a category or field</li>
              <li> {'\u2022'} Have a list of teachers of your interest</li>
              <li>&bull; select a profile of the teacher you like</li>
              <li>&bull; You can also check the experience, qualification and &nbsp;&nbsp;&nbsp;more</li>
              <li>&bull; Just go and explore...</li>
            </ol>

          </div>
        </div>
        <div className="sidebox2 flex justify-center items-center w-[40vw] h-[80vh]  absolute z-20 top-[10vh] right-0 mr-[-45vw]">video</div>

      </div>

      <div className="pagea5 texthover relative">
        <div className="page4 texthover h-screen relative z-10 pl-[15vw] bg-white text-black flex items-start text-center justify-center flex-col" >
          <div className="feature1  tracking-[10px]"> FEATURE 2 </div>
          <div className='text-[120px] mb-[-45px] font-bold  tracking-[-5px]'>drop</div>
          <div className='text-[120px] mt-[-22px] font-bold  tracking-[-5px]'>a message</div>
          {/* <div className='text-[120px] mt-[-50px] font-bold  tracking-[-5px]'>a</div> */}
          {/* <div className='text-[120px] mt-[-50px] font-bold  tracking-[-5px]'>message</div> */}
        </div>
        {/* orange div */}
        <div className='page4-2-1  absolute top-[0vh] w-[100%] opacity-1  bg-[#E94B35]  flex flex-row  '>
          <div className='left w-[50vw] pt-10 pl-5'>
            {/* <div className='topic mb-1  tracking-[10px]'> topic </div>
            <div className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta ducimus dolorum perferendis molestias dolor. Officiis aliquid veritatis asperiores, a obcaecati eos autem ipsa. Recusandae in harum quos similique, doloribus adipisci, fugiat blanditiis nesciunt eum ab voluptatum. Fuga quam ullam perspiciatis repudiandae illum suscipit vel? Architecto ipsa laboriosam ea sed facere delectus maxime sint provident eveniet iste beatae, harum nemo iure neque blanditiis mollitia incidunt eius quas aspernatur non at! Nostrum doloremque quos a ipsam, praesentium tempora reprehenderit autem, fuga et, quisquam omnis. Rerum, similique nesciunt ducimus suscipit excepturi repellendus inventore tenetur corporis, voluptas distinctio optio, magni veritatis repellat nisi? Voluptatibus corrupti dolores nemo sunt repellendus cum odit architecto, amet laudantium aperiam quae repellat vitae nihil pariatur quibusdam rem fugit error in, minima maxime. Earum sed aliquid asperiores possimus accusantium dolorem voluptate, nihil illo esse assumenda libero atque quis voluptates non nisi obcaecati dolor molestiae inventore temporibus animi nam quidem error eligendi odit. Corrupti ex, fugit aperiam explicabo dolorem amet sint minus dolor quam. Deleniti minus accusantium facilis ullam voluptate sapiente vel rem error eos tenetur, dolores at sequi labore molestiae atque soluta nulla excepturi veritatis. Aliquam repellendus, exercitationem deserunt molestiae beatae cupiditate molestias, cumque facere tempora, aperiam odio. Eos.</div> */}
          </div>

          {/* <div className='right w-[50vw]'>some laptop and computer images</div> */}
        </div>

        <div className="sidebox1 w-[50vw] h-[80vh]  absolute z-20 top-[10vh] ml-[-55vw] ">
          <div className='tracking-[10px]'>drop a message</div>
          <div className='extra text-[40px] font-semibold tracking-[-3px] mb-[-25px]'>
            <div className='mb-[-20px]'>Now you can have a conversation </div>
            <div> with your beloved <strong className='text-lime-400 pr-1'>teacher</strong></div>
          </div>
          <div className=' extra text-[60px] font-bold tracking-[-3px] mb-[-30px]'>Talk to the teacher </div>
          <div className=' extra text-[60px] font-bold tracking-[-3px] mb-[20px] '>before buying the course </div>
          <div className="bulletpoints tracking-[3px] pl-[10px] text-white font-light text-[20px]">
            <ol>
              <li>&bull; Facility of a chat provided for free</li>
              <li> {'\u2022'} A brief talk might help</li>
              <li>&bull; Know the person who you will be calling a teacher</li>
              <li>&bull; Get important information about the fees & course &nbsp;&nbsp;&nbsp;duration</li>
              <li>&bull; Just go and explore...</li>
            </ol>

          </div>
        </div>
        <div className="sidebox2 flex justify-center items-center w-[40vw] h-[80vh]  absolute z-20 top-[10vh] right-0 mr-[-45vw]">video</div>
      </div>



      <div className="pagea6 texthover relative">
        <div className="page4 texthover h-screen relative z-10 pl-[15vw] bg-white text-black flex items-start text-center justify-center flex-col" >
          <div className="feature1  tracking-[10px]"> FEATURE 3 </div>
          <div className='text-[120px] mb-[-45px] font-bold  tracking-[-5px]'>make a</div>
          <div className='text-[120px] mt-[-22px] font-bold  tracking-[-5px]'>video call</div>
          {/* <div className='text-[120px] mt-[-50px] font-bold  tracking-[-5px]'>TEACHERS</div> */}
        </div>
        {/* orange div */}
        <div className=' page4-2-1 h-[100vh] absolute top-[0vh] w-[100%] opacity-1 bg-[#E94B35] flex flex-row  '>
          <div className='left w-[50vw] pt-10 pl-5'>
            {/* <div className='topic mb-1  tracking-[10px]'> topic </div>
            <div className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta ducimus dolorum perferendis molestias dolor. Officiis aliquid veritatis asperiores, a obcaecati eos autem ipsa. Recusandae in harum quos similique, doloribus adipisci, fugiat blanditiis nesciunt eum ab voluptatum. Fuga quam ullam perspiciatis repudiandae illum suscipit vel? Architecto ipsa laboriosam ea sed facere delectus maxime sint provident eveniet iste beatae, harum nemo iure neque blanditiis mollitia incidunt eius quas aspernatur non at! Nostrum doloremque quos a ipsam, praesentium tempora reprehenderit autem, fuga et, quisquam omnis. Rerum, similique nesciunt ducimus suscipit excepturi repellendus inventore tenetur corporis, voluptas distinctio optio, magni veritatis repellat nisi? Voluptatibus corrupti dolores nemo sunt repellendus cum odit architecto, amet laudantium aperiam quae repellat vitae nihil pariatur quibusdam rem fugit error in, minima maxime. Earum sed aliquid asperiores possimus accusantium dolorem voluptate, nihil illo esse assumenda libero atque quis voluptates non nisi obcaecati dolor molestiae inventore temporibus animi nam quidem error eligendi odit. Corrupti ex, fugit aperiam explicabo dolorem amet sint minus dolor quam. Deleniti minus accusantium facilis ullam voluptate sapiente vel rem error eos tenetur, dolores at sequi labore molestiae atque soluta nulla excepturi veritatis. Aliquam repellendus, exercitationem deserunt molestiae beatae cupiditate molestias, cumque facere tempora, aperiam odio. Eos.</div> */}
          </div>

          {/* <div className='right w-[50vw]'>some laptop and computer images</div> */}
        </div>

        <div className="sidebox1 w-[50vw] h-[80vh]  absolute z-20 top-[10vh] ml-[-55vw] ">
          <div className='tracking-[10px]'>make a videocall</div>
          <div className='extra text-[40px] font-semibold tracking-[-3px] mb-[-25px]'>
            <div className='mb-[-20px]'>Not just a simple videocall</div>
            <div> its your <strong className='text-lime-400 pr-1'>Lecture class</strong></div>
          </div>
          <div className=' extra text-[60px] font-bold tracking-[-3px] mb-[-30px]'>Now study with your</div>
          <div className=' extra text-[60px] font-bold tracking-[-3px] mb-[-30px]'>teacher from</div>
          <div className=' extra text-[60px] font-bold tracking-[-3px] mb-[20px] '>any part of India</div>
          <div className="bulletpoints tracking-[3px] pl-[10px] text-white font-light text-[20px]">
            <ol>
              <li>&bull; Proper scheduled classes will be held</li>
              <li> {'\u2022'} You will get a notification for every lecture</li>
              <li>&bull; Asking doubts has become as easy as turning your mic &nbsp;&nbsp;&nbsp;on</li>
              <li>&bull; Missed the live class? Don't worry recorded lectures &nbsp;&nbsp;&nbsp;will be provided</li>
              <li>&bull; Screen recording option will also be available for the &nbsp;&nbsp;&nbsp;student also</li>
              {/* <li>&bull; Just go and explore...</li> */}
            </ol>

          </div>
        </div>
        <div className="sidebox2 flex justify-center items-center w-[40vw] h-[80vh]  absolute z-20 top-[10vh] right-0 mr-[-45vw]">video</div>

      </div>


      <div className="pagea7 texthover relative ">
        <div className="page4 texthover h-[100vh] relative z-10  pl-[15vw] bg-white text-black flex items-start text-center justify-center flex-col" >
          <div className="feature1  tracking-[10px]"> FEATURE 4 </div>
          <div className='text-[120px] mb-[-45px] font-bold  tracking-[-5px]'>create</div>
          <div className='text-[120px] mt-[-22px] font-bold  tracking-[-5px]'>communities</div>
          {/* <div className='text-[120px] mt-[-50px] font-bold  tracking-[-5px]'>TEACHERS</div> */}
        </div>
        {/* orange div */}
        <div className='page4-2-1 h-[100vh] absolute top-[0vh] w-[100%] opacity-1  bg-[#E94B35] flex flex-row '>
          <div className='left w-[50vw] pt-10 pl-5'>
            {/* <div className='topic mb-1  tracking-[10px]'> topic </div>
            <div className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta ducimus dolorum perferendis molestias dolor. Officiis aliquid veritatis asperiores, a obcaecati eos autem ipsa. Recusandae in harum quos similique, doloribus adipisci, fugiat blanditiis nesciunt eum ab voluptatum. Fuga quam ullam perspiciatis repudiandae illum suscipit vel? Architecto ipsa laboriosam ea sed facere delectus maxime sint provident eveniet iste beatae, harum nemo iure neque blanditiis mollitia incidunt eius quas aspernatur non at! Nostrum doloremque quos a ipsam, praesentium tempora reprehenderit autem, fuga et, quisquam omnis. Rerum, similique nesciunt ducimus suscipit excepturi repellendus inventore tenetur corporis, voluptas distinctio optio, magni veritatis repellat nisi? Voluptatibus corrupti dolores nemo sunt repellendus cum odit architecto, amet laudantium aperiam quae repellat vitae nihil pariatur quibusdam rem fugit error in, minima maxime. Earum sed aliquid asperiores possimus accusantium dolorem voluptate, nihil illo esse assumenda libero atque quis voluptates non nisi obcaecati dolor molestiae inventore temporibus animi nam quidem error eligendi odit. Corrupti ex, fugit aperiam explicabo dolorem amet sint minus dolor quam. Deleniti minus accusantium facilis ullam voluptate sapiente vel rem error eos tenetur, dolores at sequi labore molestiae atque soluta nulla excepturi veritatis. Aliquam repellendus, exercitationem deserunt molestiae beatae cupiditate molestias, cumque facere tempora, aperiam odio. Eos.</div> */}
          </div>

          {/* <div className='right w-[50vw]'>some laptop and computer images</div> */}
        </div>

        <div className="sidebox1 w-[50vw] h-[80vh]  absolute z-20 top-[10vh] ml-[-55vw] ">
          <div className='tracking-[10px]'>create communities</div>
          <div className='extra text-[40px] font-semibold tracking-[-3px] mb-[-25px]'>
            <div className='mb-[-20px]'>If this much was not enough</div>
            <div> then go to <strong className='text-lime-400 pr-1'>communities</strong></div>
          </div>
          <div className=' extra text-[60px] font-bold tracking-[-3px] mb-[-30px]'>Where Large group of</div>
          <div className=' extra text-[60px] font-bold tracking-[-3px] mb-[-30px] '>Students come together </div>
          <div className=' extra text-[60px] font-bold tracking-[-3px] mb-[20px] '>to from communities</div>
          <div className="bulletpoints tracking-[3px] pl-[10px] text-white font-light text-[20px]">
            <ol>
              <li>&bull; Imagine surrounded with like minded people</li>
              <li> {'\u2022'} Create communities and invite other enthusiasts</li>
              <li>&bull; Join different communities</li>
              <li>&bull; Ask doubts... not only about studies but about career, &nbsp;&nbsp;&nbsp;passion and life</li>
              <li>&bull; Just go and explore...</li>
            </ol>

          </div>
        </div>
        <div className="sidebox2 flex justify-center items-center w-[40vw] h-[80vh]  absolute z-20 top-[10vh] right-0 mr-[-45vw]">video</div>

      </div>

      <div className="pagea8 absolute z-10 left-0 right-0 mb-[100px]">
        <div className='bg-[#0D0D0D]'>
          <div className="page5 bg-[#0D0D0D] h-screen pt-[20px] text-[#B8A895] ">
            <div className='tracking-[10px] ml-[15vw] mb-[0px]'>more amazing features</div>
            {/* <div className=" line w-full mb-[-50px] h-[0.1px] bg-gray-700 my-4 z-20"></div> */}

            <div className='relative texthover h-[120px] border-y border-gray-700 top-6 overflow-hidden flex items-center'>
              <div className='texthover text-[120px] mb-[0px] tracking-[-10px] font-semibold ml-[15vw] relative z-10'>SAFE PAYMENTS</div> {/*724*/}
              <div className='page4-2-1  pl-[15vw] text-[#0D0D0D] bg-[#E94B35]  flex flex-row items-center align-baseline absolute top-[0vh] w-[100%] opacity-1'>
                <div className='w-[700px]  text-[120px] mb-[0px] tracking-[-10px] font-semibold '>SAFE PAYMEN</div>
                <div className='w-[300px] pl-[10px] text-[14px] font-semibold flex items-center right-0'>Safe payment Gateways are used,<br />one to one end encrypted</div>

              </div>
            </div>


            {/* <div className=" line w-full mb-[-50px] h-[0.1px] bg-gray-700 my-4"></div> */}

            <div className='relative texthover h-[120px] border-y border-gray-700 top-6 overflow-hidden flex items-center'>
              <div className='texthover text-[120px] mb-[0px] tracking-[-10px] font-semibold ml-[15vw] relative z-10'>SCHEDULED TESTS</div> {/*724*/}
              <div className='page4-2-1  pl-[15vw] text-[#0D0D0D] bg-[#E94B35]  flex flex-row items-center align-baseline absolute top-[0vh] w-[100%] opacity-1'>
                <div className='w-[700px]  text-[120px] mb-[0px] tracking-[-10px] font-semibold '>SCHEDULED T</div>
                <div className='w-[300px] pl-[10px] text-[14px] font-semibold flex items-center right-0'>Teacher will schedule the tests,<br /> you will get the notification</div>

              </div>
            </div>

            <div className='relative texthover h-[120px] border-y border-gray-700 top-6 overflow-hidden flex items-center'>
              <div className='texthover text-[120px] mb-[0px] tracking-[-10px] font-semibold ml-[15vw] relative z-10'>PLAYLISTS</div> {/*724*/}
              <div className='page4-2-1  pl-[15vw] text-[#0D0D0D] bg-[#E94B35]  flex flex-row items-center align-baseline absolute top-[0vh] w-[100%] opacity-1'>
                <div className='w-[700px]  text-[120px] mb-[0px] tracking-[-10px] font-semibold '>PLAYLISTS</div>
                <div className='w-[300px] pl-[10px] text-[14px] font-semibold flex items-center right-0'>Create playlists of the videos,<br /> provided by your teacher</div>

              </div>
            </div>

            <div className='relative texthover h-[120px]  border-y border-gray-700 top-6 overflow-hidden flex items-center'>
              <div className='texthover text-[120px] mb-[0px] tracking-[-10px] font-semibold ml-[15vw] relative z-10'>FEATURE</div> {/*724*/}
              <div className='page4-2-1  text-[120px] mb-[0px] tracking-[-10px] font-semibold pl-[15vw] text-[#0D0D0D] bg-[#E94B35]  flex items-center absolute top-[0vh] w-[100%] opacity-1'>FEATURE</div>
            </div>

            <div className='relative texthover h-[120px]  border-y border-gray-700 top-6 overflow-hidden flex items-center'>
              <div className='texthover text-[120px] mb-[0px] tracking-[-10px] font-semibold ml-[15vw] relative z-10'>FEATURE</div> {/*724*/}
              <div className='page4-2-1  text-[120px] mb-[0px] tracking-[-10px] font-semibold pl-[15vw] text-[#0D0D0D] bg-[#E94B35]  flex items-center absolute top-[0vh] w-[100%] opacity-1'>FEATURE</div>
            </div>


            {/*
            <div className=" line w-full mb-[-50px] h-[0.1px] bg-gray-700 my-4"></div>

            <div className='relative texthover'>
              <div className='texthover text-[120px] mb-[-50px] tracking-[-10px] font-semibold ml-[15vw] relative z-10'>FEATURE</div>
              <div className='page4-2-1 text-[120px] mb-[-50px] tracking-[-10px] font-semibold pl-[15vw] text-[#0D0D0D] bg-[#E94B35] h-[100px] flex items-center absolute top-[0px] w-[100%] opacity-1'>FEATURE</div>
            </div>

            <div className=" line w-full mb-[-50px] h-[0.1px] bg-gray-700 my-4"></div>

            <div className='relative texthover'>
              <div className='texthovertext-[120px] mb-[-50px] tracking-[-10px] font-semibold ml-[15vw] relative z-10'>FEATURE</div>
              <div className='page4-2-1 text-[120px] mb-[-50px] tracking-[-10px] font-semibold pl-[15vw] text-[#0D0D0D] bg-[#E94B35] h-[100px] flex items-center absolute top-[0px] w-[100%] opacity-0'>FEATURE</div>
            </div>

            <div className=" line w-full mb-[-50px] h-[0.1px] bg-gray-700 my-4"></div>

            <div className='relative texthover'>
              <div className='texthover text-[120px] mb-[-50px] tracking-[-10px] font-semibold ml-[15vw] relative z-10'>FEATURE</div>
              <div className='page4-2-1 text-[120px] mb-[-50px] tracking-[-10px] font-semibold pl-[15vw] text-[#0D0D0D] bg-[#E94B35] h-[100px] flex items-center absolute top-[0px] w-[100%] opacity-0'>FEATURE</div>
            </div>

            
              <div className=" line w-full mb-[-50px] h-[0.1px] bg-gray-700 my-4"></div>
              <div className='mt-[4px] font-bold text-[60px] ml-[15vw]'>...</div> */}

          </div>
        </div>

      </div>


      <div className="pagea9 ">
        <div className="page6 bg-[#0D0D0D]  z-10 h-screen flex items-center text-[#B8A895]">
          {/* inline-block: Ensures the element respects the transform.
    transform scale-x-125: Scales the text 1.25 times horizontally. Adjust the scale factor as needed. */}
          <div className='textmake w-[150vw] text-[150px] tracking-[-10px] font-bold  transform scale-x-150'>MAKE YOUR MOVE</div>



        </div>
      </div>

      <div className="pagea10 ">
        <div className="page7  bg-[#0D0D0D] relative z-10" ref={pagea101Ref} style={{ maskImage: maskImage }}>
          <div className='whattheysaid ml-[15vw] pt-10 mb-5  text-[#B7AB98]  tracking-[10px]'>what they said</div>
          <div className=" line  mb-[50px] ml-[15vw] mr-[15vw]  h-[0.1px] bg-gray-700 my-4 "></div>

          <div className="quote1 mx-[15vw] relative z-10" >
            <div className="quote  flex flex-row">
              <div className='text-[100px] text-[#E94B35]'>"</div>
              <div>
                <div className='text-[#B8A895] text-[70px] gap-[2px] tracking-[-5px] font-semibold'>
                  <div className='my-[0px]'> Learning is a companion</div>
                  <div className='my-[-30px]'> on a journey</div>
                  <div className='my-[-30px]'> to a destination</div>
                </div>
                <div className="author mt-[70px] mb-[70px]">
                  <div className='text-[#B8A895] text-sm'>Aryabhatta</div>
                  <div className='text-gray-500 text-sm font-semibold'>Mathematician and Astronomer</div>
                  <div className='text-gray-500 text-sm font-semibold'>Ancient India 476-550 CE</div>
                </div>
              </div>
            </div>
          </div>



          <div className=" line  mb-[50px] ml-[15vw] mr-[15vw]  h-[0.1px] bg-gray-700 my-4 "></div>

          <div className="quote2 mx-[15vw] relative" >
            <div className="quote  flex flex-row">
              <div className='text-[100px] text-[#E94B35]'>"</div>
              <div>
                <div className='text-[#B8A895] text-[70px] gap-[2px] tracking-[-5px] font-semibold'>
                  <div className='my-[0px]'> A dream is not that which</div>
                  <div className='my-[-30px]'>you see while sleeping,</div>
                  <div className='my-[-30px]'> it is something that</div>
                  <div className='my-[-30px]'>does not let you sleep.</div>
                </div>
                <div className="author mt-[70px] mb-[70px]">
                  <div className='text-[#B8A895] text-sm'>APJ Abdul kalam</div>
                  <div className='text-gray-500 text-sm font-semibold'>Indian scientist and our former President</div>
                  <div className='text-gray-500 text-sm font-semibold'>Modern India </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" line  mb-[50px] ml-[15vw] mr-[15vw]  h-[0.1px] bg-gray-700 my-4 "></div>

          <div className="quote3 mx-[15vw] relative " >
            <div className="quote  flex flex-row">
              <div className='text-[100px] text-[#E94B35]'>"</div>
              <div>
                <div className='text-[#B8A895] text-[70px] gap-[2px] tracking-[-5px] font-semibold'>
                  <div className='my-[0px]'> Success can come to you by </div>
                  <div className='my-[-30px]'>courageous devotion to the</div>
                  <div className='my-[-30px]'>task lying in front of you.</div>
                </div>
                <div className="author mt-[70px] mb-[70px]">
                  <div className='text-[#B8A895] text-sm'>CV Raman</div>
                  <div className='text-gray-500 text-sm font-semibold'>Indian Scientist and Noble Prize winner</div>
                  <div className='text-gray-500  text-sm font-semibold'>Modern India</div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="images absolute top-[160px] right-[100px] h-[260px] w-[100px] bg-slate-400 text-white flex flex-col align-middle items-center justify-center gap-2">
            <div className="image1 h-[80px] w-[80px] rounded-full bg-red-600">
              hlo
            </div>
            <div className="image1 h-[80px] w-[80px] rounded-full bg-yellow-300">
              hlo
            </div>
            <div className="image1 h-[80px] w-[80px] rounded-full bg-green-400">
              hlo
            </div>
          </div> */}
        </div>
        <div className="images z-10 absolute top-[820vh] right-[100px] h-[260px] w-[100px]   flex flex-col align-middle items-center justify-center gap-2">
          <div className="image1 h-[80px] w-[80px] rounded-full ">
            <img src="/Screenshot 2025-01-17 091246.png" alt="img" className='object-cover rounded-full h-[80px] w-[80px]' />
          </div>
          <div className="image1 h-[80px] w-[80px] rounded-full ">
            <img src="/Screenshot 2025-01-17 085253.png" alt="img" className='object-cover rounded-full h-[80px] w-[80px]' />
          </div>
          <div className="image1 h-[80px] w-[80px] rounded-full ">
            <img src="/Screenshot 2025-01-17 085217.png" alt="img" className='object-cover rounded-full h-[80px] w-[80px]' />
          </div>
        </div>
        {/* orange div */}
        <div className="page7  bg-[#E94B35] text-[#0D0D0D] absolute top-[790vh] w-[100%] opacity-1 ">
          <div className='whattheysaid mx-[15vw] pt-10 mb-5    tracking-[10px]'>what they said</div>
          <div className=" line w-full mb-[50px] ml-[15vw] mr-[15vw]  h-[0.1px] bg-[#0D0D0D] "></div>

          <div className="quote1 mx-[15vw]">
            <div className="quote  flex flex-row">
              <div className='text-[100px] '>"</div>
              <div>
                <div className=' text-[70px] gap-[2px] tracking-[-5px] font-semibold'>
                  <div className='my-[0px]'>सीखना एक यात्रा </div>
                  <div className='my-[-30px]'>में एक साथी है जो </div>
                  <div className='my-[-30px]'>आपको गंतव्य तक पहुंचाता है।</div>
                </div>
                <div className="author mt-[70px] mb-[70px]">
                  <div className=' text-sm'>आर्यभट्ट</div>
                  <div className=' text-sm font-semibold'>गणितज्ञ और खगोलशास्त्री</div>
                  <div className=' text-sm font-semibold'>प्राचीन भारत 476-550 ईस्वी</div>
                </div>
              </div>
            </div>
          </div>



          <div className=" line w-full mb-[50px] ml-[15vw] mr-[15vw]  h-[0.1px]  my-4 bg-[#0D0D0D]"></div>

          <div className="quote2 mx-[15vw]">
            <div className="quote  flex flex-row">
              <div className='text-[100px] '>"</div>
              <div>
                <div className=' text-[70px] gap-[2px] tracking-[-5px] font-semibold'>
                  <div className='my-[0px]'>सपना वह नहीं है जो </div>
                  <div className='my-[-30px]'>आप सोते समय देखते हैं,</div>
                  <div className='my-[-30px]'>यह कुछ ऐसा है जो</div>
                  <div className='my-[-30px]'>आपको सोने नहीं देता।</div>
                </div>
                <div className="author mt-[70px] mb-[70px]">
                  <div className=' text-sm'>ए.पी.जे. अब्दुल कलाम</div>
                  <div className=' text-sm font-semibold'>भारतीय वैज्ञानिक और हमारे पूर्व राष्ट्रपति</div>
                  <div className=' text-sm font-semibold'>आधुनिक भारत</div>
                </div>
              </div>
            </div>
          </div>

          <div className=" line w-full mb-[50px] ml-[15vw] mr-[15vw]  h-[0.1px]  my-4 bg-[#0D0D0D] "></div>

          <div className="quote3 mx-[15vw]">
            <div className="quote  flex flex-row">
              <div className='text-[100px] '>"</div>
              <div>
                <div className=' text-[70px] gap-[2px] tracking-[-5px] font-semibold'>
                  <div className='my-[0px]'>सफलता आपके सामने पड़े </div>
                  <div className='my-[-30px]'>कार्य के प्रति साहसी </div>
                  <div className='my-[-30px]'>समर्पण से आ सकती है।</div>
                </div>
                <div className="author mt-[70px] mb-[70px]">
                  <div className=' text-sm'>सी.वी. रमन</div>
                  <div className=' text-sm font-semibold'>भारतीय वैज्ञानिक और नोबेल पुरस्कार विजेता</div>
                  <div className=' text-sm font-semibold'>आधुनिक भारत</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="pagea11 relative">
        <div className="page8 h-[110vh] relative bg-[#0D0D0D] text-[#B8A895] flex flex-col items-center z-10 justify-center" ref={pagea11Ref} style={{ maskImage: maskImage }} >
          <div className="heading tracking-[15px] mb-[-20px] " >our motto</div>
          <div className="motto flex flex-col items-center ">
            <div className='text-[120px] mb-[-80px] tracking-[-10px] font-semibold'>GOOD DESIGN</div>
            <div className='text-[120px] mb-[-50px] tracking-[-10px] font-semibold'>IS HONEST</div>
          </div>
          <div className='text-[#B8A895] text-sm mt-[50px]' >Dieter Rams</div>
        </div>
        {/* orange div */}
        <div className="page8 h-[110vh] bg-[#E94B35] text-[#0D0D0D] flex flex-col items-center justify-center absolute top-[0vh] w-[100%] opacity-1">
          <div className="heading tracking-[15px] mb-[-20px]">our motto</div>
          <div className="motto flex flex-col items-center">
            <div className='text-[120px] mb-[-80px] tracking-[-10px] font-semibold'>GOOD DESIGN</div>
            <div className='text-[120px] mb-[-50px] tracking-[-10px] font-semibold'>IS HONEST</div>
          </div>
          <div className=' text-sm mt-[50px]'>Dieter Rams</div>
        </div>
      </div>

    </>
  )
}

export default page1