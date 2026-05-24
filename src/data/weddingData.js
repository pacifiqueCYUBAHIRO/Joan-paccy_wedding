import storyMetImg from '../assets/story_we_met.png';
import storyFriendshipImg from '../assets/story_friendship.png';
import storyProposalImg from '../assets/story_proposal.png';
import storyFallingImg from '../assets/hero_couple4.png';
import heroCoupleImg2 from '../assets/hero_couple2.png';
import realCoupleImg from '../assets/faces.jpg';

export const weddingDate = new Date("2026-08-15T14:00:00");

export const storyTimeline = [
  {
    id: 'weMet',
    image: storyMetImg,
    year: '2019'
  },
  {
    id: 'friendship',
    image: storyFriendshipImg,
    year: '2020'
  },
  {
    id: 'falling',
    image: storyFallingImg,
    year: '2022'
  },
  {
    id: 'engagement',
    image: storyProposalImg,
    year: '2025'
  },
  {
    id: 'forever',
    image: heroCoupleImg2,
    year: '2026'
  }
];

export const galleryImages = [
  realCoupleImg,
  storyProposalImg,
  storyFriendshipImg,
  storyMetImg,

];

