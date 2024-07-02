import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// loading the DOM Content   
$(function(e) {
    $(function(){
        $("#nav-placeholder").load("nav.html");
        console.log("Page reloaded");
    });

    var currentTheme = $("html").attr("data-theme");
    console.log(localStorage.getItem('theme'));
    if(localStorage.getItem('theme')){
        currentTheme = localStorage.getItem('theme');
        $("html").attr("data-theme", currentTheme);
    }
    
    
    $(".home-image img").on("click", function(e) {
        
        $(document).load("index.html");
        var currentTheme = $("html").attr("data-theme");
        console.log(localStorage.getItem('theme'));
        if(localStorage.getItem('theme')){
            currentTheme = localStorage.getItem('theme');
            $("html").attr("data-theme", currentTheme);
        }
        if (currentTheme === "light") {
            $("html").attr("data-theme", "dark");
            localStorage.setItem('theme', 'dark');
        } else {
            $("html").attr("data-theme", "light");
            localStorage.setItem('theme', 'light');
        }
        e.preventDefault();
    }); 

    var typed = new Typed(".text-effect", {
        strings: ["CS Student", "Artist", "Author"],
        typeSpeed: 100,
        backSpeed: 75,
        backDelay: 1000,
        loop: true
    })

    initThreeJS();
});
 

// // adding event listener to navbar burger
// $(".navbar-burger").click(function() {
//     $(this).toggleClass("is-active");
//     var target = $(".navbar-menu");
//     if (target.hasClass('is-hidden')){
//         target.removeClass('is-hidden');
//         } else {
//             target.addClass('is-hidden')
//             };
// })

function initThreeJS() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
        canvas: $('#bg'),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    camera.position.setX(-3);

    // renderer.render(scene, camera);

    // Torus

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    // Lights

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    function animate() {
        requestAnimationFrame(animate);
    
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.01;
    
        // moon.rotation.x += 0.005;
    
        // controls.update();
    
        renderer.render(scene, camera);
    }
    
    animate();
}



















