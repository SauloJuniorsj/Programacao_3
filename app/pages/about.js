export const WelcomeComponent = {
    template:
        `
        <div class="min-h-screen bg-gray-100 bg-no-repeat bg-cover" style="background-image: url('app/images/image.jpg')">
            <div style="text-align: center; padding-top: 15em; padding-right: 14em;">
                <router-link to="/list" class="font-black text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 "> Ir para listagem</router-link>
            </div>   
    
        </div>

      
        `,
    data() {
        return{

        }
    }
}
