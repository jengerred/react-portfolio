import { useCallback } from "react";




import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.


const Particle3 = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles   

            id="tsparticles3"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        bubble: {
                            distance: 300,
                            size: 50,
                            duration: 6,
                            opacity: 0.5,
                            speed: 3
                          },
                    },
                },
                particles: {
                   
                    color: {
                        value: ["#83EEFF", "#f858da", "#83EEFF"],     
                    },
                    links: {
                        color: "transparent",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 5,
                    },
                
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "image",
                        options: {
                            "image": [
                                {
                                    "src": "https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png",
                                },

                                {
                                    "src": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                                },

                                {
                                    "src": "https://www.moveoapps.com/blog/wp-content/uploads/2021/12/mern-stack.png",
                                },
                                {
                                    "src": "https://upload.wikimedia.org/wikipedia/commons/3/32/Mongo-db-logo.png",
                                },
                                {
                                    "src": "https://res.cloudinary.com/practicaldev/image/fetch/s--HrxLMybh--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ytv06kervllbwm3bvus1.png",
                                },
                                {
                                    "src": "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
                                },
                                {
                                    "src": "https://en.wikipedia.org/wiki/GitHub#/media/File:GitHub_Invertocat_Logo.svg",
                                },
                                {
                                    "src": "                                https://res.cloudinary.com/practicaldev/image/fetch/s--7MQClrRp--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7ce4oq75sia6ni6q46s3.png",
                                },

                                
                            ]
                        } 
                    },
                  
                    size: {
                        value: { min: 10, max: 20 },
                    },
                },
            
                detectRetina: true,
            }}
        />
    );
};
export default Particle3;