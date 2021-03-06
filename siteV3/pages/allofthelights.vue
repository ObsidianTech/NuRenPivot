<template>
    <div class="aotl">
        <section class="headerSection">
            <div class="navbarWrapper">
                <navbar />
            </div>
            <div class="headerImgWrapper">
                <img src="https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/header.jpg" alt="" class="headerImg">
            </div>
        </section>
        <section class="contentSection">
            <h5 class="logline">
                When an Officer gets held at gunpoint,
                a pretentious black guy must choose between
                risking arrest by helping his provocative white
                friend or running away.
            </h5>
            <img src="https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/7730c07c-56ef-406c-a18a-7505bf1d033b.jpg" alt="" class="poster">
            <div class="movie videoPanel">
                <div class="movieWrapper">
                    <h1>All Of The Lights</h1>
                    <iframe src="https://player.vimeo.com/video/433721875"
                        width="100%"
                        height="100%"
                        frameborder="0"
                        allow="autoplay; fullscreen"
                        allowfullscreen
                    >
                    </iframe>
                </div>
            </div>
            <div class="contentPanel">
                <div class="contentBox contentLeft">
                    <div class="synWrapper">
                        <sectionHead>Synopsis</sectionHead>
                        <p class="synopsis">
                            A night of fun with some good friends and girls
                            ends abruptly when gunshots go off. Noah is extremely
                            upset with Hunter’s erratic behavior and confronts him
                            about it. Hunter, doesn’t want to end the night prematurely,
                            so he persuades Noah to keep the party going.
                            The perception of race is tested when Noah’s
                            white friend pulls a gun out on a cop, and he must
                            talk him down before the situation gets worse.
                        </p>
                    </div>
                </div>
                <div class="contentBox contentRight">
                    <img class="contentImg" src="https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/NoahxHunter.png" alt="">
                </div>
            </div>
            <div class="contentPanel">
                <div class="contentBox contentLeft">
                    <img class="contentImg" src="https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/DirectorChan.jpg" alt="">
                </div>
                <div class="contentBox contentRight">
                    <div class="dsWrapper">
                        <sectionHead>Director's Statement</sectionHead>
                        <p class="synopsis">
                            I have always been fascinated with lights
                            and the various abstract meanings behind them.
                            All of the Lights is a story about the perception of
                            race and, no matter what you do, you can’t
                            escape the reality of being a black man in America.
                            This film was inspired by the impact of police brutality
                            and racism that sits in my subconscious
                            while searching for a solution to these issues.
                            We explore a friendship between two guys that
                            represents the two different sides of America, and
                            how sometimes it’s hard to see different
                            perspectives when stereotypes are so dominant.
                            The lighting in this film displays the light of
                            life and also the light every black person fears.
                        </p>
                    </div>
                </div>
            </div>
            <div class="contentPanel">
                <div class="contentBox contentLeft">
                </div>
                <div class="contentBox contentRight">
                </div>
            </div>
            <sectionHead>The Cast</sectionHead>
            <div class="slideshowWrapper">
                <div class="slideshowHeader">
                    <h3 class="actor">{{ currentCastMember.name }}</h3>
                    as
                    <br>
                    <h5 class="character">{{ currentCastMember.role }}</h5>
                </div>
                <div class="slideshowImage">
                    <img class="ssImg" :src="currentCastMember.imgKey" alt="">
                </div>
                <div class="btn-group castSelector" role="group" aria-label="Basic example">
                    <button
                        v-for="(member, idx) in castListing"
                        :key="idx"
                        :class="evalSelection(idx)"
                        @click="setCastSelection(idx)"
                    >
                        {{ member.role }}
                    </button>
                </div>
            </div>
            <section-head>The Crew</section-head>
            <div class="creditsWrapper">
                <div class="creditsLeft">
                    <ul class="Credits">
                        <li
                            class="credit"
                            v-for="(p, idx) in creditPosition"
                            :key="idx"
                        >
                            {{ p }}
                        </li>
                    </ul>
                </div>
                <div class="creditsRight">
                    <ul class="Credits">
                        <li
                            class="credit"
                            v-for="(r, idx) in creditRecipient"
                            :key="idx"
                        >
                            {{ r }}
                        </li>
                    </ul>
                </div>
            </div>
            <section-head>Behind the Scenes</section-head>
            <div class="btsWrapper">
                <p class="btsStatement">
                    <span class="highlight">All of the Lights</span> was written,
                    revised and proofread between early 2018 to early
                    2019 by Chandonae Baskin. Chandonae began
                    pre-production mid 2019 with assistance from
                    Tahani Khawaji and Christopher Smith managing
                    the project. Throughout the rest of 2019, Chandonae would
                    finish recruiting, rehearsing and filming the project.
                    Some of the highlights from the filming process can be seen here.
                </p>
                <div class="btsVideoWrapper">
                    <iframe
                        class="videoPanel"
                        src="https://player.vimeo.com/video/433775515"
                        width="100%"
                        height="100%"
                        frameborder="0"
                        allow="autoplay; fullscreen"
                        allowfullscreen
                    >
                    </iframe>
                </div>
                <div class="btsCarWrapper">
                    <carousel :imageKeys="btsImages" />
                </div>
            </div>
            <section-head>Extras</section-head>
            <div class="commercialWrapper videoPanel">
                <iframe
                    class="videoPanel"
                    src="https://player.vimeo.com/video/430534265"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                >
                </iframe>
            </div>
            <div class="commercialWrapper videoPanel">
                <iframe
                    class="videoPanel"
                    src="https://player.vimeo.com/video/433446709"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                >
                </iframe>
            </div>
            <div class="musicSectionWrapper">
                <h4 class="smallHeader">The Music</h4>
                <div class="musicStatement">
                    <p>Chandonae is a naturally creative and artistic person.
                        Durning the writing, post and pre-production of the project,
                        music was heavily consumed and used as a direct inspiration
                        for the ambiance of the film. The songs featured in the film
                        were created by the talented Satin Sage (formally KiddSpectro)
                        and allowed to be used in the film.
                    </p>
                </div>
                <h3 class="SatinHeader">Satin Sage</h3>
                <img src="https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/SatinSage-min.png" alt="" class="SatinSage">
                <p class="SatinSageDesc">
                    Satin Sage, born Jeremiah Cooper, is an electronic music producer, musician,
                    and dancer originally from Nashville, TN. The currently Charlotte-based artist
                    brings innovation and energy to his craft.
                    Influenced by the works of Kaytranada, Pomo, Sam Gellaitry,
                    and many more, much of his style focuses on blending traditional concepts
                    in HipHop, Funk, and R&B with electronic elements, along with using
                    orchestral/tribal soundscapes in his productions.
                </p>
                <div class="musicWrapper">
                    <div class="musicPanel">
                        <div class="contentBox contentLeft">
                            <div class="tidalWrapper">
                                <section-head>Galaxy</section-head>                                
                                <iframe 
                                    class="tidalWindow"
                                    src="https://embed.tidal.com/tracks/161893329?layout=gridify" 
                                    frameborder="0" 
                                    allowfullscreen 
                                >
                                </iframe>
                            </div>
                        </div>
                        <div class="contentBox contentRight">
                            <div class="tidalWrapper">
                                <section-head>Pretend</section-head>
                                <iframe
                                    class="tidalWindow"
                                    src="https://embed.tidal.com/tracks/159453489?layout=gridify"
                                    frameborder="0"
                                    allowfullscreen
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <div class="playlist">
                        <section-head>AOTL Playlist</section-head>
                        <div style="position: relative; padding-bottom: 100%; height: 0; overflow: hidden; max-width: 100%;"><iframe src="https://embed.tidal.com/playlists/2ad14fc5-814c-4603-a13d-9008550c7d3f?layout=gridify" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 1px; min-height: 100%; margin: 0 auto;"></iframe></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import navbar from '../components/atoms/Header/NavigationBar.vue';
import sectionHead from '../components/atoms/Header/SectionHead.vue';
import carousel from '../components/organisms/Carousel/Carousel.vue';

export default {
    name: "AllOfTheLights",
    data() {
        return {
            currentCastMember: {},
            castListing: [
                {
                    name: "Tay Epps",
                    role: "Noah",
                    imgKey: "https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/Noah.jpg",
                },
                {
                    name: "Blake Thompson",
                    role: "Hunter",
                    imgKey: "https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/Hunter.jpg",
                },
                {
                    name: "Julia Vega",
                    role: "Lexi",
                    imgKey: "https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/Lexi-min.jpg",
                },
                {
                    name: "Sam Gerard",
                    role: "Chelsea",
                    imgKey: "https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/Chelsea-min.jpg",
                },
                {
                    name: "Fernando Ochoa",
                    role: "Gonzales",
                    imgKey: "https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/Gonzales.jpg",
                },
            ],
            btsImages: [
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/Arrested.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/Director.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/DollarCity.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/MissedShot.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/FinalDay1.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/PartyScene1.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/SettingUpCar.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/CarRig.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/7fe52962-930f-413a-b33c-11c5dd6268c6.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/385cff83-a2ac-4af5-b70d-3049569bb4cf.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/6db4f519-9ed4-4022-8339-de5daad8fade.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/de9146be-9f55-4998-8da1-bd0e3a61322b.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/0b179c06-a27c-49da-8c57-57ec1487afe1.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/710a2d3b-0e7c-4fb3-a956-6e4a49d0b31f.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/8ace47d3-a8bb-43ad-b0a9-2039df4b56ca.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/3eced093-ab46-469e-b767-55f7cf0839fd.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/044fcefc-f8aa-45ce-bf16-6e441856717c.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/43c59910-a594-4eea-ae4f-64f2b300f60d.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/e6aeff4c-6760-45e7-96e5-c64b8006688a.jpg',
                'https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/ab0852bc-4fe1-4e43-9d57-75411b887853.jpg',
            ],
            creditPosition: [
                'Director',
                'Writer',
                'Producer',
                'Asst. Producer',
                'Dir. of Photography',
                'Editor',
                'Music Director',
                'Sound Recordist',
                'Executive Producer',
                'Executive Producer',
                'Production Manager',
                'First Asst. Dir.',
                'Second Asst. Dir.',
                'Floor Runner',
                'Script Supervisor',
                'Sound Maintenance',
                '1st Assistant Camera',
                'Casting Director',
                'Assoc. Casting Dir.',
                'VFX',
                'Production Asst.',
                'Production Asst.',
                'Crafty',
                'BTS',
                'EPK',
                'Digital Colorist',
                'Foley Artist',
            ],
            creditRecipient: [
                'Chandonae Baskin',
                'Chandonae Baskin',
                'Chandonae Baskin',
                'Tahani Khawji',
                'Justin Woolen',
                'Chandonae Baskin',
                'Christopher Smith',
                'John-William Goines',
                'Chandonae Baskin',
                'Christopher Smith',
                'Christopher Smith',
                'Tahani Khawji',
                'Callie Haney',
                'Carlton Fripp',
                'Kelita Browning',
                'John-William Goines',
                'Robbie Ballew',
                'Lori Fischer',
                'Kyla Hawkins',
                'Sahil Haider',
                'Othman Alafsi',
                'Taylor William',
                'Namudi Harley',
                'Christopher Smith',
                'Chandonae Baskin',
                'Chandonae Baskin',
                'Chandonae Baskin',

            ],
        };
    },
    mounted(){
        this.setCastSelection(0);
    },
    computed: {
        showAOTL() {
            return this.$store.state.showAOTL;
        },
    },
    components: {
        navbar,
        sectionHead,
        carousel,
    },
    methods: {
        setCastSelection(key) {
            this.currentCastMember = this.castListing[key];
        },
        evalSelection(idx) {
            let currentClass = 'castMemberButton';
            currentClass += this.currentCastMember.role == this.castListing[idx].role ? ' selected' : '';
            return currentClass;
        },
    },
};
</script>

<style lang="scss">
.aotl {
    font-family: 'Montserrat', sans-serif;
    color: $AOTLTeal;
}

.highlight {
    color: $AOTLYellow;
}

.headerSection {
    height: 100%;
    width: 100%;
}

.navbarWrapper {
    position: relative;
    width: 100%;
    padding: 25px;
    margin-bottom: 0;

    @include widescreen {
        padding-left: 80px;
        padding-right: 80px;
    }
}

.headerImgWrapper {
    width: 100%;
    max-width: 1340px;
    display: block;
    position: relative;
    margin: 0 auto;
}

.headerImg {
    width: 100%;
    height: auto;
    margin: 0 auto;
}

.contentSection {
    width: 100%;
}

.logline {
    padding: 25px;
    text-align: center;
}

.comingSoon {
    text-align: center;
    padding: 12px;
}

.movie {
    color: $AOTLYellow;
    text-align: center;
    display: block;
    margin: 0 auto;
}

.videoPanel {
    display: block;
    margin: 0 auto;

    @include phone {
        padding: 25px 0;
    }

    @include tablet {
        height: 650px;
        width: 650px;
    }

    @include desktop {
        height: 1024px;
        width: 1024px;
    }

    @include widescreen {
        height: 1300px;
        width: 1300px;
    }
}

.movieWrapper {
    height: 100%;
    width: 100%;
}

.poster {
    display: block;
    margin: 0 auto;
    padding: 15px;
    width: 100%;
    height: auto;

    @include tablet {
        width: 68%;
        max-width: 68%;
    }

    @include desktop {
        width: 30%;
        max-width: 30%;
    }

    @include widescreen {
        width: 25%;
        max-width: 25%;
    }
}


.synopsis {
    padding: 20px;
    text-align: left;
}

.contentBox {
    display: flex;
    justify-content: center;
    align-items: center;
}

.contentPanel {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include phone{
        margin-bottom: 15px;
        grid-template-columns: 1fr;
    }

    @include tablet{
        grid-template-columns: 1fr;
    }
}

.contentImg {
    width: 100%;
    height: auto;
}

.slideshowImage {
    display: block;
}

.ssImg {
    display: block;
    width: 50%;
    height: auto;
    margin: 0 auto;

    @include tablet {
        width: 45%;
    }

    @include desktop {
        width: 25%;
    }

    @include widescreen {
        width: 20%;
    }
}

.castSelector {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 25px;
}

.castMemberButton {
    background-color: transparent;
    color: $AOTLYellow;
    padding: 10px 4px;
    border: 1px solid $AOTLYellow;
    font-size: 15px;
    outline: none;
}

.slideshowHeader {
    text-align: center;
}

.actor {
    color: $AOTLYellow;
}

.selected {
    background-color: $AOTLYellow;
    color: black;
}

.btsStatement {
    padding: 18px;

    @include desktop {
        padding: 0 250px;
    }

    @include widescreen {
        padding: 0 250px;
    }
}

.btsVideoWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 35px;
}

.btsVideo {
    @include tablet {
        height: 600px;
        width: 600px;
    }

    @include desktop {
        height: 600px;
        width: 600px;
    }

    @include widescreen {
        height: 600px;
        width: 600px;
    }
}

.btsCarWrapper {
    max-width: 1024px;
    display: block;
    margin: 0 auto;
}

.musicStatement {
    padding: 18px;

    @include desktop {
        padding: 45px 200px;
    }

    @include widescreen {
        padding: 45px 200px;
    }
}

.tidalWrapper {
    position: relative;
    padding-bottom: 100%;
    height: 350px;
    overflow: hidden;
    max-width: 100%;
}

.tidalWindow {
    top: 0;
    left: 0;
    width: 100%;
    height: 350px;
    margin: 0 auto;
}

.playlist {
    display: block;
    margin: 0 auto;
    padding-bottom: 65px;
    max-width: 1024px;
}

.commercialWrapper {

    @include desktop {
        height: 100%;
        width: 100%;
    }
}

.musicPanel {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include phone{
        margin-bottom: 15px;
        grid-template-columns: 1fr;
    }

    @include tablet{
        grid-template-columns: 1fr 1fr;
    }
}

.creditsWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.Credits {
    list-style-type: none;
    padding: 6px;

    @include tablet {
        padding: 8px;
        font-size: 20px;
    }

    @include desktop {
        padding: 8px;
        font-size: 20px;
    }

    @include widescreen {
        padding: 8px;
        font-size: 20px;
    }
}

.creditsRight {
    color: $AOTLYellow;
}

.creditsLeft {
    color: $AOTLTeal;
    text-align: right;
}

.smallHeader {
    text-align: center;
    color: $AOTLYellow;
}

.SatinSage {
    display: block;
    margin: 0 auto;
    width: 70%;
    height: auto;

    @include tablet {
        width: 50%;
    }

    @include desktop {
        width: 40%;
    }

    @include widescreen {
        width: 25%;
    }
}

.SatinHeader {
    margin: 10px;
    text-align: center;
    color: $AOTLYellow;
}

.SatinSageDesc {
    display: block;
    margin: 0 auto;
    padding: 15px;

    @include tablet {
        padding: 30px;
    }

    @include desktop {
        padding: 70px;
    }

    @include widescreen {
        padding: 50px 150px;
    }
}
</style>