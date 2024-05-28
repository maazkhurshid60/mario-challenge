import anime from "animejs";

export const randomCloudAnimations = (target, direction, duration) => {
    if(direction === 'left') {
        anime({
            targets: target,
            translateX: [
                {value: anime.random(0, -1000), duration: duration},
                {value: 0, duration: duration},
            ],
            easing: 'linear',
            autoplay: true,
            loop: true,
        });
    } else {
        anime({
            targets: target,
            translateX: [
                {value: anime.random(0, 1000), duration: duration},
                {value: 0, duration: duration},
            ],
            easing: 'linear',
            autoplay: true,
            loop: true,
        });
    }
}

export const fadeOutAnimation = (targets) => {
    return {
        targets: targets,
        opacity: [1,0],
        background: '#000000',
        duration: 500,
        loop: false,
        autoplay: false
    };
}

export const fadeInAnimation = (targets) => {
    return {
        targets: targets,
        opacity: [0,1],
        duration: 1000,
        loop: false,
        autoplay: false
    };
}