<template>
    <footer class="bg-yellow-200 grid lg:grid-cols-3 md:grid-cols-2 text-center shadow-lg md:flex md:items-center md:justify-around md:p-6">
        <div class="mb-2.5 my-2">
            <div class="uppercase font-bold">
                <h6 class="title m-1 self-center font-bold tracking-wider text-base text-black">Technologies</h6>
            </div>
            <div class="flex justify-center">
                <ul class="technologies-list flex flex-row justify-around">
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
            <div class="uppercase font-bold mb-2.5">
                <h6 class="m-1 font-bold tracking-wider text-base text-black">Music</h6>
            </div>
            <a href="https://www.youtube.com/c/AmbitionMusic">
                <div class="flex flex-row justify-center">
                    <img class="rounded-full" src="../assets/imgs/amition.png" alt="youtube-logo" width="30"/>  
                    <span class="font-bold tracking-wider text-base text-black ml-2">
                        Ambition
                    </span>
                </div>
            </a>
        </div>
        <div class="flex flex-col my-2">
            <div class="uppercase font-bold mb-2.5">
                <h6 class="m-1 font-bold tracking-wider text-base text-black">Developer</h6>
            </div>
            <a href="https://github.com/tia-cin">
                <span class="font-bold tracking-wider text-base text-black ml-2">Cintia Arce</span>
            </a>
        </div>
    </footer>
</template>

<script>
export default {
    name: "CreditFooter"
}
</script>