<template>
    <footer class="footer bg-yellow-200 flex flex-row justify-around">
        <div class="footer-flex flex flex-col justify-around">
            <div class="title-container">
                <h3 class="title m-1 self-center font-bold tracking-wider text-xl text-white">Technologies</h3>
            </div>
            <div class="technologies-container">
                <ul class="technologies-list flex flex-row justify-around">
                    <li class="tech-item mx-2">
                        <a href="https://www.javascript.com/">
                            <img src="../assets/imgs/js.png" alt="javascript-logo" width="40">
                        </a>
                    </li>
                    <li class="tech-item mx-2">
                        <a href="https://vuejs.org/">
                            <img src="../assets/imgs/vue.png" alt="vue-js-logo" width="40">
                        </a>
                    </li>
                    <li class="tech-item mx-2">
                        <a href="https://tailwindcss.com/">
                            <img src="../assets/imgs/tailwindcss.png" alt="tailwind-css-logo" width="50">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-flex flex flex-col my-2">
            <h3 class="m-1 font-bold tracking-wider text-lg text-white">Music from</h3>
            <a href="https://www.youtube.com/c/AmbitionMusic">
                <div class="flex flex-row justify-around">
                    <img class="rounded-full" src="../assets/imgs/amition.png" alt="youtube-logo" width="30"/>  
                    <span class="font-bold tracking-wider text-base text-white ml-2">
                        Ambition
                    </span>
                </div>
            </a>
        </div>
    </footer>
</template>

<script>
export default {
    name: "CreditFooter"
}
</script>