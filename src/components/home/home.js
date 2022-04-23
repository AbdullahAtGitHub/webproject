import "./home.css"
import { Navbar2 } from '../navbar/navbar';
import { Post } from "./post";
import profile from './profile.png'


export const Home = () => {
    return (
        <>
            <Navbar2 />

            <div class="container bootstrap snippets bootdey">
                <div class="row">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />

                </div>
            </div>
            <div className="pagei">
                <div class="pagination">
                    <a href="#">&laquo;</a>
                    <a class="active" href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">&raquo;</a>
                </div>
            </div>
        </>
    )
}