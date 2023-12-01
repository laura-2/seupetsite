export default function VideoSection(){
    // let deg = 6;
    // for (let i = 1; i <= 20; i++) {
    //   let div = document.querySelector(".container div:nth-child(" + i + ")");
    //   div.style.transform = 'rotate(' + deg + 'deg)';
    //   deg = deg + 6;
    return (
        <div className='flex justify-center gap-10 items-center mx-32'>
        {/* <div class="container">
            <div>s</div>
            <div>a</div>
            <div>l</div>
            <div>v</div>
            <div>e</div>
            <div></div>
            <div>f</div>
            <div>o</div>
            <div>t</div>
            <div>o</div>
            <div>s</div>
            <div></div>
            <div>e</div>
            <div></div>
            <div>v</div>
            <div>í</div>
            <div>d</div>
            <div>e</div>
            <div>o</div>
            <div>s</div>
        </div> */}
            <video autoPlay loop src={require('@/assets/video.mp4')} style={{height: '600px', width: '600px'}}/>
            <div className='block text-center mx-20'>
            <p className='text-xl text-black'>Esse é o Toby, ele ama carinho e é muito brincalhão, nos últimos meses ele passou por uma cirurgia super complicada no disco
                dorsal, eu utilizei o remédio Alvex que ajudou muito ele com a dor, super indico. O veterinário que seguiu com a cirurgia foi o 
                Felipe Vasco, ele é de SP e muito atensioso, super indico.
            </p>
            <button className='botao-experiencia'>Compartilhar minha experiência!</button>
            </div>
        </div>
    )
}