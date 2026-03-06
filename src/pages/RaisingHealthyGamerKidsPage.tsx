import ProductLandingPage from "./ProductLandingPage";

const description = `This ebook is a science-based guide designed to help parents understand, manage, and make the most of video games in their children's lives.

Inside, you'll discover the truth behind common myths about gaming, learn what science actually says about how video games affect the developing brain, and explore the real benefits they can offer when used the right way.

You'll also learn how to recognize when gaming becomes a problem, how to understand what your child may be expressing through play, and how to set healthy, age-appropriate boundaries without constant conflict.

The goal isn't to eliminate video games.

It's to turn them into a tool for growth, learning, and stronger family connection—through balanced, mindful guidance.`;

const RaisingHealthyGamerKidsPage = () => (
  <ProductLandingPage
    title="Raising Healthy Gamer Kids: A Practical and Science-Based Guide for Modern Parents"
    description={description}
    cover="/assets/covers/raising-healthy-gamer-kids.jpg"
    price="$5"
    tag="Best Seller"
    backUrl="/parenting"
    backLabel="Back to Parenting"
  />
);

export default RaisingHealthyGamerKidsPage;
