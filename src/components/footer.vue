<template>
    <div class="bg-yellow-200 flex flex-row justify-around">
        <div class="flex flex-col justify-around">
            <h3 class="m-1 self-center font-bold tracking-wider text-xl text-white">Technologies</h3>
            <div class="">
                <ul class="flex flex-row justify-around">
                    <li class="mx-2">
                        <a href="https://www.javascript.com/">
                            <img src="../assets/imgs/js.png" alt="javascript-logo" width="40">
                        </a>
                    </li>
                    <li class="mx-2">
                        <a href="https://vuejs.org/">
                            <img src="../assets/imgs/vue.png" alt="vue-js-logo" width="40">
                        </a>
                    </li>
                    <li class="mx-2">
                        <a href="https://tailwindcss.com/">
                            <img src="../assets/imgs/tailwindcss.png" alt="tailwind-css-logo" width="50">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col my-2">
            <h3 class="m-1 font-bold tracking-wider text-lg text-white">Music from</h3>
            <a href="https://www.youtube.com/c/AmbitionMusic">
                <div class="flex flex-row justify-around">
                    <img src="../assets/imgs/youtube.png" alt="youtube-logo" width="30"/>  
                    <span class="font-bold tracking-wider text-base text-white ml-2">
                        Ambition
                    </span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreditFooter"
}
</script>