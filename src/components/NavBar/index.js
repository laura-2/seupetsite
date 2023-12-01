import Image from "next/image";
import logo from '@/assets/pet.png'
import Icon from '@mdi/react';
import { mdiAccountCircleOutline } from '@mdi/js';
import { mdiHeartOutline } from '@mdi/js';

export default function NavBar(){
    return (
        <nav className="flex justify-between items-center mx-10 my-5">
            <div className="flex gap-2 items-center">
            <Image src={logo} alt="Seu Pet Site" style={{width: '50px'}}/>
            <h1 className="text-2xl">Seu Pet Site</h1>
            </div>
                <li className="flex list-none text-xl items-center gap-5">
                    <a href="/gatos">Gatos</a>
                    <a href="/cachorros">Cachorros</a>
                    <a href="/peixes">Peixes</a>
                    <a href="/passaros">Pássaros</a>
                    <a href="/outros">Outros</a>
                    </li>
                    <li className="flex list-none items-center gap-2">
                <Icon path={mdiHeartOutline} size={1.5} />
                <Icon path={mdiAccountCircleOutline} size={1.5} />
                </li>

        </nav>
    )
}