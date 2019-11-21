import filmCard from './FilmCard.vue';

export default {
    title: 'Film Card',
};

export const FilmCard = () => ({
    components: { filmCard },
    data() {
        return {
          posterUrl: require('../../../assets/FutureWork/AlloftheLights.jpg'),
          name: 'test',
          desc: 'test',
        };
    },
    template: `
        <film-card
          :posterUrl="posterUrl"
          :name="name"
          :description="desc"
        ></film-card>
    `,
})