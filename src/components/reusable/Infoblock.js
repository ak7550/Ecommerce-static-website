import React from 'react'
import Heading from './Heading';
import { Link } from 'gatsby';

export default function Infoblock({ heading }) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum possimus quasi laudantium officia ipsam recusandae adipisci cum ex similique. Fuga similique vel incidunt ipsam numquam quae, autem beatae ex sequi aspernatur, maxime voluptas tenetur? Libero similique facilis officia reprehenderit repellendus eum maiores consequuntur, accusamus odit ratione nemo, atque laboriosam! Perspiciatis, atque fuga? Accusamus magni inventore aspernatur et aut repudiandae nihil.
                        </p>
                        <Link to="/about/" >
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
