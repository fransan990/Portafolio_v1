const options = {

    particles: {
        color: { value: "#fff" },
        links: {
            color: "#ffffff",
            distance: 500,
            enable: false,
            opacity: 0.4,
            width: 2
        },
        move: {
            direction: "right",
            speed: 0.05
        },
        opacity: {
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05
            }
        },
        number: {
            value: 160,
            density: {
                enable: true,
                value_area: 1500
            }
        },
        line_linked: {
            enable: false,
            opacity: 0.03
        },
        move: {
            direction: "right",
            speed: 0.05
        },
        size: {
            value: 3
        },
    },
    interactivity: {
        events: {
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            push: {
                particles_nb: 1
            }
        }
    },
    // retina_detect: true
    detectRetina: true
}



export default options