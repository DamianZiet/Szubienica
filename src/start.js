gsap.from('h1', { duration:1,opacity:0, height:0, stagger: 0.6, delay:.3});
gsap.from('.sp1', { duration:1,x:-2000+"%",stagger: 0.6, delay:.3});
gsap.from('.sp2', { duration:1, opacity:0,stagger: 0.6, delay:.6});
gsap.from('.sp3', { duration:1,x: 2500+"%",stagger: 0.6, delay:.9});
gsap.from('.proverbs', { duration:1,opacity:0,stagger: 0.6, delay:2.6});
gsap.from('.sport', { duration:1,opacity:0,stagger: 0.6, delay:3.6});
gsap.from('.history', { duration:1,opacity:0,stagger: 0.6, delay:4.6});

function cloudsMoving(mql) {
    const cloudsMovingTl  = new TimelineMax({repeat: -1});
    cloudsMovingTl.fromTo('.cloud img', 80 , {x:100}, {x:800, ease:Linear, repeat:-1}, 0);
  if(!mql.matches){
    cloudsMovingTl.fromTo('.cloud img',500 , {x:600}, {x:2200, ease:Linear, repeat:-1}, 0);
  }
}
const conta= document.querySelector('.container')
var mediaQueries = window.matchMedia("(orientation: portrait)");

function changeOrientation(mql,conta) {
    if (mql.matches) {
      TweenMax.from(conta,6,{backgroundSize: "300% 200%"})
      TweenMax.to(conta,6,{backgroundSize: "200% 150%"})
      if(window.innerWidth>=768){
      TweenMax.from(conta,6,{backgroundSize: "300% 200%"})
      TweenMax.to(conta,6,{backgroundSize: "120% 120%"})
      }
    }
    else {
      if(window.innerWidth<=768){
      TweenMax.from(conta,6,{backgroundSize: "300% 200%"})
      TweenMax.to(conta,6,{backgroundSize: "200% 150%"})
      TweenMax.from(conta,6,{backgroundSize: "300% 200%"})
      TweenMax.to(conta,6,{backgroundSize: "120% 120%"})
      } 
      else {
      TweenMax.from(conta,6,{backgroundSize: "300% 200%"})
      TweenMax.to(conta,6,{backgroundSize: "200% 150%"})
      TweenMax.from(conta,6,{backgroundSize: "300% 200%"})
      TweenMax.to(conta,6,{backgroundSize: "100% 100%"})
      }
    }
    cloudsMoving(mql)
  }
  mediaQueries.addListener(changeOrientation);
  changeOrientation(mediaQueries, conta); 

  const categories = [...document.querySelectorAll('a')].forEach(category=>category.addEventListener('click',function(){
    console.log(this.textContent)
   const qw=  this.textContent;
   localStorage.setItem('categoryName', qw)
  }))






 