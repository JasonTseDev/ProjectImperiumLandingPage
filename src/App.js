import * as React from "react";

function App(props) {
    return (
        <>
            <div className="hero" maxWidth={1200} lazyLoad={false}>
                <section className="section">
                    <div className="description">
                        <div className="div">
                            <div>Project Imperium: The Ultimate Zomboid Playground</div>
                        </div>
                        <div className="describe-your-product-value-he">
                            <div>
                                Join Project Imperium for an unparalleled Zomboid adventure.
                                Loaded with diverse mods and exclusive content, our server
                                offers a unique survival challenge. With a vigilant admin team,
                                your every decision matters in this relentless struggle for
                                survival. Redefine your Zomboid experience—join Project Imperium
                                today!
                            </div>
                        </div>
                        <div className="call-to-actions">
                            <a
                                href="https://discord.gg/pzimperium"
                                className="cta-2"
                                openLinkInNewTab={false}
                            >
                                Join Discord!
                            </a>
                        </div>
                    </div>
                    {/*<img*/}
                    {/*    loading="lazy"*/}
                    {/*    srcSet="https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7"*/}
                    {/*    className="img"*/}
                    {/*/>*/}
                    <div className="image-grid">
                        <div className="div-2">
                            <div className="column">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0713d196bce5461aa4ca381b1177d1ba?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0713d196bce5461aa4ca381b1177d1ba?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0713d196bce5461aa4ca381b1177d1ba?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0713d196bce5461aa4ca381b1177d1ba?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0713d196bce5461aa4ca381b1177d1ba?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0713d196bce5461aa4ca381b1177d1ba?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0713d196bce5461aa4ca381b1177d1ba?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0713d196bce5461aa4ca381b1177d1ba"
                                    className="img-2"
                                    alt=""
                                />
                            </div>
                            <div className="column-2">
                                <div className="image-group-1">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa9beb6157fa443b8a8a49c0d42d9925d?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa9beb6157fa443b8a8a49c0d42d9925d?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa9beb6157fa443b8a8a49c0d42d9925d?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa9beb6157fa443b8a8a49c0d42d9925d?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa9beb6157fa443b8a8a49c0d42d9925d?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa9beb6157fa443b8a8a49c0d42d9925d?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa9beb6157fa443b8a8a49c0d42d9925d?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa9beb6157fa443b8a8a49c0d42d9925d"
                                        className="img-3"
                                        alt=""
                                    />
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa86ccad119074fe19998c3ab657015be?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa86ccad119074fe19998c3ab657015be?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa86ccad119074fe19998c3ab657015be?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa86ccad119074fe19998c3ab657015be?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa86ccad119074fe19998c3ab657015be?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa86ccad119074fe19998c3ab657015be?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa86ccad119074fe19998c3ab657015be?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fa86ccad119074fe19998c3ab657015be"
                                        className="img-4"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="column-3">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F5ccaf224ccca438fac31651c5e3fb6a7"
                                    className="img-5"
                                    alt=""
                                />
                            </div>
                            <div className="column-4">
                                <div className="image-group-2">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F319250c3054f4543960da4279dfcb24f?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F319250c3054f4543960da4279dfcb24f?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F319250c3054f4543960da4279dfcb24f?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F319250c3054f4543960da4279dfcb24f?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F319250c3054f4543960da4279dfcb24f?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F319250c3054f4543960da4279dfcb24f?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F319250c3054f4543960da4279dfcb24f?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F319250c3054f4543960da4279dfcb24f"
                                        className="img-6"
                                        alt=""
                                    />
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F566209683eb343a38a05744acec830be?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F566209683eb343a38a05744acec830be?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F566209683eb343a38a05744acec830be?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F566209683eb343a38a05744acec830be?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F566209683eb343a38a05744acec830be?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F566209683eb343a38a05744acec830be?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F566209683eb343a38a05744acec830be?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F566209683eb343a38a05744acec830be"
                                        className="img-7"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="column-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F2d5b882538874a08a8116e04cabf12d0?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F2d5b882538874a08a8116e04cabf12d0?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F2d5b882538874a08a8116e04cabf12d0?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F2d5b882538874a08a8116e04cabf12d0?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F2d5b882538874a08a8116e04cabf12d0?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F2d5b882538874a08a8116e04cabf12d0?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F2d5b882538874a08a8116e04cabf12d0?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F2d5b882538874a08a8116e04cabf12d0"
                                    className="img-8"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="div-3">
                <div className="div-4">
                    <div className="column-6">
                        <img
                            loading="lazy"
                            sizes="(max-width: 638px) 81vw, 56vw"
                            srcSet="https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fb844ef26fcf145108a98e88777a206d9?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fb844ef26fcf145108a98e88777a206d9?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fb844ef26fcf145108a98e88777a206d9?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fb844ef26fcf145108a98e88777a206d9?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fb844ef26fcf145108a98e88777a206d9?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fb844ef26fcf145108a98e88777a206d9?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fb844ef26fcf145108a98e88777a206d9?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fb844ef26fcf145108a98e88777a206d9"
                            className="img-9"
                            alt=""
                        />
                    </div>
                    <div className="column-7">
                        <div className="div-5">
                            <div>Season 7</div>
                        </div>
                        <div className="div-6">
                            <div>
                                Season 7 transforms the game with a new map featuring a custom
                                PVE hub island. Ash's military gear adds a cutting-edge
                                dimension. Economy shifts and a CAT Construction mod enable
                                building unique tiles. High-tier loot and zombie zones elevate
                                challenges. Countless mod selections offer a dynamic and
                                enhanced gaming experience.
                            </div>
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className="div-7">
                <div className="div-8">
                    <div className="column-8">
                        <img
                            loading="lazy"
                            sizes="(max-width: 638px) 81vw, 56vw"
                            srcSet="https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F888da4421c244aeebb5b23f2e47b8857?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F888da4421c244aeebb5b23f2e47b8857?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F888da4421c244aeebb5b23f2e47b8857?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F888da4421c244aeebb5b23f2e47b8857?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F888da4421c244aeebb5b23f2e47b8857?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F888da4421c244aeebb5b23f2e47b8857?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F888da4421c244aeebb5b23f2e47b8857?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F888da4421c244aeebb5b23f2e47b8857"
                            className="img-10"
                            alt=""
                        />
                    </div>{" "}
                    <div className="column-9">
                        <div className="div-9">
                            <div>Clear Cove Chronicles: Season 7 Unveiled</div>
                        </div>{" "}
                        <div className="div-10">
                            <div>
                                Embark on Season 7's defining journey with the "Clear Cove Chronicles." Witness a transformed landscape as the base game's vanilla map evolves into Clear Cove, a realm filled with secrets waiting to be unearthed. Brace for an array of survival challenges where resources vary in availability, presenting a dynamic and ever-shifting landscape. Welcome to the heart of Season 7, where exploration is key, and survival takes on a new meaning.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-11">
                <div className="div-12">
                    <div className="column-10">
                        <div className="div-13">
                            <div>Guns, Lot Of Guns</div>
                        </div>
                        <div className="div-14">
                            <div>
                                Explore Ash's Weapon Mod, a game-changer in Project Imperium.
                                With an extensive arsenal of meticulously crafted melee and
                                ranged weapons, each exuding high detail and unparalleled power,
                                the mod introduces a new crafting system for maintenance and
                                repairs. Attachments amplify lethality, while combat-centric
                                quality of life updates redefine both PVP and PVE, delivering an
                                immersive and thrilling experience. Engage in battles like never
                                before with Ash's Weapon Mod.
                            </div>
                        </div>
                    </div>
                    <div className="column-11">
                        <img
                            loading="lazy"
                            sizes="(max-width: 638px) 81vw, 56vw"
                            srcSet="https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F94443bbe08444b2c954d0d72b20ce45b?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F94443bbe08444b2c954d0d72b20ce45b?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F94443bbe08444b2c954d0d72b20ce45b?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F94443bbe08444b2c954d0d72b20ce45b?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F94443bbe08444b2c954d0d72b20ce45b?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F94443bbe08444b2c954d0d72b20ce45b?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F94443bbe08444b2c954d0d72b20ce45b?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F94443bbe08444b2c954d0d72b20ce45b"
                            className="img-11"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="div-15">
                <div className="div-16">
                    <div className="column-12">
                        <img
                            loading="lazy"
                            sizes="(max-width: 638px) 81vw, 56vw"
                            srcSet="https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F1e4dc8b06c3b4814911b1ee3d8abf29b?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F1e4dc8b06c3b4814911b1ee3d8abf29b?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F1e4dc8b06c3b4814911b1ee3d8abf29b?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F1e4dc8b06c3b4814911b1ee3d8abf29b?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F1e4dc8b06c3b4814911b1ee3d8abf29b?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F1e4dc8b06c3b4814911b1ee3d8abf29b?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F1e4dc8b06c3b4814911b1ee3d8abf29b?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F1e4dc8b06c3b4814911b1ee3d8abf29b"
                            className="img-12"
                            alt=""
                        />
                    </div>
                    <div className="column-13">
                        <div className="div-17">
                            <div>CAT Construction: Build Your World</div>
                        </div>
                        <div className="div-18">
                            <div>
                                Unleash your creativity with CAT Construction, a revolutionary
                                mod in Project Imperium. Craft your dream house with a fully
                                scalable system supporting all game tiles and mods. Dynamic
                                recipes evolve based on the nature of buildable tiles, unlocking
                                new possibilities as your skills grow. Build any-sized garage
                                door and let your imagination soar—CAT Construction: where the
                                potential is limitless, and the sky's the only limit.
                            </div>
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className="div-19">
                <div className="div-20">
                    <div className="column-14">
                        <div className="div-21">
                            <div>Economic Evolution: Unleashing KatCoin and Petals</div>
                        </div>{" "}
                        <div className="div-22">
                            <div>
                                Embark on a transformative journey with our massive economy
                                overhaul in Season 7! From a revamped global shop to changes in
                                valuable exchanges and vehicle purchases, the dynamics of
                                KatCoin have shifted. Visit in-game vending machines and ATMs to
                                explore the latest products and prices. Introducing Petals, a
                                mysterious currency with unique uses – discover its secrets
                                in-game. With seasoned players Worldwide and Bowser leading the
                                charge, expect a balanced and immersive gameplay experience for
                                all survivors. Dive into the economic evolution now!{" "}
                            </div>
                        </div>
                    </div>{" "}
                    <div className="column-15">
                        <img
                            loading="lazy"
                            sizes="(max-width: 638px) 81vw, 56vw"
                            srcSet="https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F4ccc42cdfd964a0a9a7b9d518a080d3d?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F4ccc42cdfd964a0a9a7b9d518a080d3d?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F4ccc42cdfd964a0a9a7b9d518a080d3d?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F4ccc42cdfd964a0a9a7b9d518a080d3d?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F4ccc42cdfd964a0a9a7b9d518a080d3d?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F4ccc42cdfd964a0a9a7b9d518a080d3d?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F4ccc42cdfd964a0a9a7b9d518a080d3d?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F4ccc42cdfd964a0a9a7b9d518a080d3d"
                            className="img-13"
                            alt=""
                        />
                    </div>
                </div>
            </div>{" "}
            <div className="div-23">
                <div className="div-24">
                    <div className="column-16">
                        <img
                            loading="lazy"
                            sizes="(max-width: 638px) 81vw, 56vw"
                            srcSet="https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fd07025aa55e7454f8623143c3ed68a11?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fd07025aa55e7454f8623143c3ed68a11?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fd07025aa55e7454f8623143c3ed68a11?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fd07025aa55e7454f8623143c3ed68a11?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fd07025aa55e7454f8623143c3ed68a11?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fd07025aa55e7454f8623143c3ed68a11?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fd07025aa55e7454f8623143c3ed68a11?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2Fd07025aa55e7454f8623143c3ed68a11"
                            className="img-14"
                            alt=""
                        />
                    </div>{" "}
                    <div className="column-17">
                        <div className="div-25">
                            <div>
                                Season 7 Spectacles: Unveiling Exclusive Events and Rich Lore
                            </div>
                        </div>{" "}
                        <div className="div-26">
                            <div>
                                Prepare for an unforgettable Season 7 as Dweller, TWD,
                                Worldwide, Bowser, and Walter lead the charge in crafting an
                                immersive narrative. Dive into a world where small and grand
                                events unfold throughout the season, each meticulously designed
                                to elevate your gameplay. From mysterious encounters to epic
                                challenges, our expertly curated events promise an engaging and
                                memorable experience. Expect more than just survival—immerse
                                yourself in the rich lore of Project Imperium. This season,
                                every moment is an opportunity for discovery, every event a
                                chapter in your unique story. Join us and be a part of a gaming
                                experience like no other.
                            </div>
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className="div-27">
                <div className="div-28">
                    <div className="column-18">
                        <div className="div-29">
                            <div>Project Imperium: Crafting Memories, Fostering Fun</div>
                        </div>{" "}
                        <div className="div-30">
                            <div>
                                At Project Imperium, our core value is simple yet profound:
                                creating a unique and enjoyable experience for every player.
                                It's not about numbers or metrics, but about crafting memorable
                                moments, forging friendships, and sharing laughter. We believe
                                in a community-driven ethos where fun reigns supreme. The server
                                thrives on the collective efforts of players and the volunteer
                                work of our admin team, dedicated to ensuring a vibrant and
                                entertaining environment. As we embark on Season 7, our success
                                is indebted to the contributions of Alice, Ash, Bowser, Cat,
                                Dweller, Jason, TWD, Walter, Worldwide, and the entire
                                community. Thank you for making Project Imperium the exceptional
                                experience it is. Here's to many more adventures together!{" "}
                            </div>
                        </div>
                    </div>{" "}
                    <div className="column-19">
                        <img
                            loading="lazy"
                            sizes="(max-width: 638px) 81vw, 56vw"
                            srcSet="https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0b70853813f24de29e022e6423b2753b?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0b70853813f24de29e022e6423b2753b?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0b70853813f24de29e022e6423b2753b?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0b70853813f24de29e022e6423b2753b?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0b70853813f24de29e022e6423b2753b?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0b70853813f24de29e022e6423b2753b?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0b70853813f24de29e022e6423b2753b?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8280388fef504174a7c128ba46d93618%2F0b70853813f24de29e022e6423b2753b"
                            className="img-15"
                            alt=""
                        />
                    </div>
                </div>
            </div>{" "}
            <div className="div-31">
                <div className="centered-box">
                    <div className="title">
                        <div>Join the Adventure: Season 7 on Discord!</div>
                    </div>{" "}
                    <div className="subtitle">
                        <div>
                            Embark on an epic journey in Season 7! Join our Discord community
                            to explore, discuss, and experience the exciting new features.
                            Don't miss out on the latest updates, events, and a thriving
                            community. Dive into the action – your next adventure awaits!
                        </div>
                    </div>
                    <a
                        href="https://discord.gg/pzimperium"
                        className="a"
                        openLinkInNewTab={true}
                    >
                        Join Discord
                    </a>
                </div>
            </div>
            <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          position: relative;
          align-self: stretch;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          //height: 100vh;
          background-color: rgba(6, 6, 6, 1);
          padding: 10% 20px 0;
        }
        @media (max-width: 991px) {
          .hero {
            //height: 100vh;
          }
        }
        .section {
          display: flex;
          flex-direction: column;
          position: relative;
          align-self: stretch;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          //height: 100vh;
          background-color: rgba(6, 6, 6, 1);
          //padding: 10% 20px 0;
          width: 100%;
          flex-grow: 1;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 991px) {
          .section {
            //height: 100vh;
          }
        }
        .description {
          display: flex;
          flex-direction: column;
          max-width: 860px;
          justify-content: flex-start;
          align-items: flex-start;
          margin: 36px auto 0;
        }
        .div {
          max-width: 860px;
          color: rgba(255, 255, 255, 1);
          letter-spacing: -0.5px;
          text-align: center;
          width: 100%;
          font: 700 48px/120% "Poppins", sans-serif;
        }
        @media (max-width: 640px) {
          .div {
            font-size: 36px;
          }
        }
        .describe-your-product-value-he {
          max-width: 860px;
          margin-top: 8px;
          color: rgba(195, 195, 195, 1);
          letter-spacing: 0px;
          text-align: center;
          font: 300 24px "Poppins", sans-serif;
        }
        @media (max-width: 991px) {
          .describe-your-product-value-he {
            font-size: 16px;
          }
        }
        .call-to-actions {
          display: flex;
          flex-direction: row;
          position: relative;
          gap: 16px;
          width: auto;
          align-self: center;
          margin: 0 auto;
        }
        .cta-2 {
          all: unset;
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          appearance: none;
          color: rgba(255, 255, 255, 1);
          border-radius: 4px;
          text-align: center;
          cursor: pointer;
          border-style: solid;
          border-width: 1px;
          border-color: rgba(255, 255, 255, 1);
          padding: 15px 25px;
        }
        @media (max-width: 991px) {
          .cta-2 {
            padding-bottom: 8px;
          }
        }
        .img {
          aspect-ratio: 0.69;
          object-fit: cover;
          object-position: center;
          width: 100%;
          margin-top: 20px;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
        }
        @media (max-width: 991px) {
          .img {
            max-width: 471px;
            display: flex;
            border-radius: 12px;
            margin: 48px auto 0;
          }
        }
        @media (max-width: 640px) {
          .img {
            display: flex;
          }
        }
        .image-grid {
          width: 100%;
          flex-grow: 0px;
          flex-direction: column;
          display: flex;
          height: auto;
          margin: 36px auto 36px;
        }
        @media (max-width: 991px) {
          .image-grid {
            width: 100%;
            align-self: center;
            height: auto;
            flex-grow: 0;
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .image-grid {
            display: flex;
          }
        }
        .div-2 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-2 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 19%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .img-2 {
          aspect-ratio: 0.93;
          object-fit: cover;
          object-position: center;
          width: 100%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
          border-radius: 12px;
          max-width: 226px;
          margin: auto;
        }
        @media (max-width: 991px) {
          .img-2 {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .img-2 {
            display: none;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 19%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .image-group-1 {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 16px;
          width: 100%;
          align-self: stretch;
          margin: auto;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
          border-radius: 12px;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img-3 {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .img-3 {
            display: none;
          }
        }
        .img-4 {
          aspect-ratio: 1.23;
          object-fit: cover;
          object-position: center;
          width: 100%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
          border-radius: 12px;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img-4 {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .img-4 {
            display: none;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 21%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .img-5 {
          aspect-ratio: 0.69;
          object-fit: cover;
          object-position: center;
          width: 100%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
          border-radius: 12px;
          height: auto;
          flex-grow: 1;
          margin: 0 auto;
        }
        @media (max-width: 991px) {
          .img-5 {
            height: auto;
            flex-grow: 0;
            display: none;
          }
        }
        @media (max-width: 640px) {
          .img-5 {
            display: none;
          }
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 19%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .image-group-2 {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 16px;
          margin: auto 0;
        }
        .img-6 {
          aspect-ratio: 0.62;
          object-fit: cover;
          object-position: center;
          width: 100%;
          margin-top: 1px;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
          border-radius: 12px;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img-6 {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .img-6 {
            display: none;
          }
        }
        .img-7 {
          aspect-ratio: 0.95;
          object-fit: cover;
          object-position: center;
          width: 100%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
          border-radius: 12px;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img-7 {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .img-7 {
            display: none;
          }
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 19%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-5 {
            width: 100%;
          }
        }
        .img-8 {
          aspect-ratio: 1.07;
          object-fit: cover;
          object-position: center;
          width: 100%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
          border-radius: 12px;
          max-width: 278px;
          margin: auto;
        }
        @media (max-width: 991px) {
          .img-8 {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .img-8 {
            display: none;
          }
        }
        .div-3 {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 80%;
          padding-bottom: 30px;
          margin: 30px auto -3px;
          align-items: center;
          
        }
        .div-4 {
          gap: 20px;
          display: flex;
          max-width: 800px;
        }
        @media (max-width: 991px) {
          .div-4 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-6 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-6 {
            width: 100%;
          }
        }
        .img-9 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          margin-top: -1px;
          text-align: center;
          height: auto;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
        }
        .column-7 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-7 {
            width: 100%;
          }
        }
        .div-5 {
          position: relative;
          //margin-top: 20px;
          height: auto;
          text-align: left;
          font-size: 32px;
          font-weight: 500;
        }
        .div-6 {
          position: relative;
          margin-top: 6px;
          text-align: left;
          line-height: 30px;
          height: auto;
        }
        @media (max-width: 640px) {
          .div-6 {
            font-size: 14px;
          }
        }
        .div-7 {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 80%;
          padding-bottom: 30px;
          margin: 30px auto 0;
          align-items: center;
        }
        .div-8 {
          gap: 20px;
          display: flex;
          max-width: 800px;
        }
        @media (max-width: 991px) {
          .div-8 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-8 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-8 {
            width: 100%;
          }
        }
        .img-10 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          margin-top: -1px;
          text-align: center;
          height: auto;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
        }
        .column-9 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-9 {
            width: 100%;
          }
        }
        .div-9 {
          position: relative;
          //margin-top: 20px;
          height: auto;
          text-align: left;
          font-size: 32px;
          font-weight: 500;
        }
        .div-10 {
          position: relative;
          margin-top: 6px;
          text-align: left;
          line-height: 30px;
          height: auto;
        }
        @media (max-width: 640px) {
          .div-10 {
            font-size: 14px;
          }
        }
        .div-11 {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 80%;
          padding-bottom: 30px;
          margin: 30px auto 0;
          align-items: center;
        }
        .div-12 {
          gap: 20px;
          display: flex;
          max-width: 800px;
        }
        @media (max-width: 991px) {
          .div-12 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-10 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-10 {
            width: 100%;
          }
        }
        .div-13 {
          position: relative;
          //margin-top: 20px;
          height: auto;
          text-align: left;
          font-size: 32px;
          font-weight: 500;
        }
        .div-14 {
          position: relative;
          margin-top: 6px;
          text-align: left;
          line-height: 30px;
          height: auto;
        }
        @media (max-width: 640px) {
          .div-14 {
            font-size: 14px;
          }
        }
        .column-11 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-11 {
            width: 100%;
          }
        }
        .img-11 {
          aspect-ratio: 1.51;
          object-fit: cover;
          object-position: center;
          width: 100%;
          margin-top: -1px;
          text-align: center;
          height: auto;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
        }
        .div-15 {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 80%;
          padding-bottom: 30px;
          margin: 30px auto 0;
          align-items: center;
        }
        .div-16 {
          gap: 20px;
          display: flex;
          max-width: 800px;
        }
        @media (max-width: 991px) {
          .div-16 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-12 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-12 {
            width: 100%;
          }
        }
        .img-12 {
          aspect-ratio: 1.3;
          object-fit: cover;
          object-position: center;
          width: 100%;
          margin-top: -1px;
          text-align: center;
          height: auto;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
        }
        .column-13 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-13 {
            width: 100%;
          }
        }
        .div-17 {
          position: relative;
          //margin-top: 20px;
          height: auto;
          text-align: left;
          font-size: 32px;
          font-weight: 500;
        }
        .div-18 {
          position: relative;
          margin-top: 6px;
          text-align: left;
          line-height: 30px;
          height: auto;
        }
        @media (max-width: 640px) {
          .div-18 {
            font-size: 14px;
          }
        }
        .div-19 {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 80%;
          padding-bottom: 30px;
          margin: 30px auto 0;
          align-items: center;
        }
        .div-20 {
          gap: 20px;
          display: flex;
          max-width: 800px;
        }
        @media (max-width: 991px) {
          .div-20 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-14 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-14 {
            width: 100%;
          }
        }
        .div-21 {
          position: relative;
          //margin-top: 20px;
          height: auto;
          text-align: left;
          font-size: 32px;
          font-weight: 500;
        }
        .div-22 {
          position: relative;
          margin-top: 6px;
          text-align: left;
          line-height: 30px;
          height: auto;
        }
        @media (max-width: 640px) {
          .div-22 {
            font-size: 14px;
          }
        }
        .column-15 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-15 {
            width: 100%;
          }
        }
        .img-13 {
          aspect-ratio: 1.08;
          object-fit: cover;
          object-position: center;
          width: 100%;
          margin-top: -1px;
          text-align: center;
          height: auto;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
        }
        .div-23 {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 80%;
          padding-bottom: 30px;
          margin: 30px auto 0;
          align-items: center;
        }
        .div-24 {
          gap: 20px;
          display: flex;
          max-width: 800px;
        }
        @media (max-width: 991px) {
          .div-24 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-16 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-16 {
            width: 100%;
          }
        }
        .img-14 {
          aspect-ratio: 1.02;
          object-fit: cover;
          object-position: center;
          width: 100%;
          margin-top: -1px;
          text-align: center;
          height: auto;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
        }
        .column-17 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-17 {
            width: 100%;
          }
        }
        .div-25 {
          position: relative;
          //margin-top: 20px;
          height: auto;
          text-align: left;
          font-size: 32px;
          font-weight: 500;
        }
        .div-26 {
          position: relative;
          margin-top: 6px;
          text-align: left;
          line-height: 30px;
          height: auto;
        }
        @media (max-width: 640px) {
          .div-26 {
            font-size: 14px;
          }
        }
        .div-27 {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 80%;
          padding-bottom: 30px;
          margin: 30px auto 0;
          align-items: center;
        }
        .div-28 {
          gap: 20px;
          display: flex;
          max-width: 800px;
        }
        @media (max-width: 991px) {
          .div-28 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-18 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-18 {
            width: 100%;
          }
        }
        .div-29 {
          position: relative;
          //margin-top: 20px;
          height: auto;
          text-align: left;
          font-size: 32px;
          font-weight: 500;
        }
        .div-30 {
          position: relative;
          margin-top: 6px;
          text-align: left;
          line-height: 30px;
          height: auto;
        }
        @media (max-width: 640px) {
          .div-30 {
            font-size: 14px;
          }
        }
        .column-19 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-19 {
            width: 100%;
          }
        }
        .img-15 {
          aspect-ratio: 0.71;
          object-fit: cover;
          object-position: center;
          width: 100%;
          margin-top: -1px;
          text-align: center;
          height: auto;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
        }
        .div-31 {
          display: flex;
          flex-direction: column;
          position: relative;
          background-image: url(https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2F271e00b9f0c54f05a9c7c0e53f5634c8?width=1200&height=1000);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          padding: 142px 20px;
        }
        @media (max-width: 991px) {
          .div-31 {
            padding: 105px 0;
          }
        }
        @media (max-width: 640px) {
          .div-31 {
            padding: 87px 0;
          }
        }
        .centered-box {
          display: flex;
          flex-direction: column;
          position: relative;
          max-width: 700px;
          margin: auto;
          padding: 17px 0;
        }
        @media (max-width: 991px) {
          .centered-box {
            padding-bottom: 49px;
          }
        }
        .title {
          position: relative;
          margin-top: -2px;
          text-align: center;
          height: auto;
          font-size: 58px;
          color: rgba(255, 255, 255, 1);
        }
        @media (max-width: 991px) {
          .title {
            margin-top: 1px;
            text-align: center;
            font-size: 54px;
          }
        }
        @media (max-width: 640px) {
          .title {
            font-size: 31px;
          }
        }
        .subtitle {
          position: relative;
          margin-top: 30px;
          text-align: center;
          height: auto;
          font-size: 21px;
          color: rgba(255, 255, 255, 1);
        }
        @media (max-width: 991px) {
          .subtitle {
            text-align: center;
            margin-top: 35px;
          }
        }
        @media (max-width: 640px) {
          .subtitle {
            font-size: 15px;
            margin-top: 25px;
          }
        }
        .a {
          all: unset;
          display: flex;
          flex-direction: column;
          position: relative;
          appearance: none;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(0, 0, 0, 1);
          border-radius: 4px;
          text-align: center;
          font-size: 19px;
          margin: 27px auto 0;
          padding: 20px 30px;
        }
        @media (max-width: 991px) {
          .a {
            margin-top: 29px;
          }
        }
        @media (max-width: 640px) {
          .a {
            font-size: 16px;
            margin-top: 21px;
            padding: 15px 25px;
          }
        }
      `}</style>
        </>
    );
}



export default App;
