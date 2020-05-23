import React from 'react'
import Heading from './Heading';
import {Link} from 'gatsby';
export default function DualInfoblock({heading, imageSource}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}  />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla odio amet porro, in voluptatum delectus esse incidunt dolore alias ut repudiandae. Eligendi quia fugiat impedit voluptatem deserunt provident iste id hic itaque at saepe sed illum enim ducimus, quis nulla dolore, consequatur consectetur ex, numquam corporis explicabo cumque officia omnis?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim magnam, exercitationem voluptate expedita rerum fugit commodi animi optio fugiat harum ipsa culpa accusamus inventore impedit est laboriosam quae corrupti delectus blanditiis quod nam ullam? Sapiente quaerat exercitationem aliquid delectus vitae dolore voluptatum doloremque molestias doloribus iste laborum tempore, veniam consectetur culpa quos accusamus reprehenderit, totam eveniet aliquam cupiditate magnam, blanditiis nesciunt! Est earum necessitatibus aspernatur quae voluptatibus voluptatum rerum illum dolorum ratione ullam recusandae nulla inventore animi ad fugiat doloribus iusto, eos vero aperiam obcaecati ipsa! Temporibus quo voluptate culpa porro iure dolores quasi est eveniet autem? Ipsam, ducimus amet.
                        </p>
                    </div>
                    <div className="col-4">
                        <div className="card bg-dark" >
                            <img src={imageSource} alt=" image goes here" className="card-img-top" />
                                <div className="card-body">
                                    <div className="card-title text-white text-success">Just clicked potos</div>
                                    <p className="card-text text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia vitae ullam repellat sint quibusdam cupiditate voluptatem exercitationem quisquam dicta alias!</p>
                                    <Link to="/" className="btn btn-warning btn-block" target="_blank" rel="noopener noreferrer">{heading}</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
