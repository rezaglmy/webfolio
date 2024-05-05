import { VerticalProjectRow } from './VerticalProjectRow';

const VerticalProjects = () => (
  <div className="mx-4 h-full max-w-screen-lg px-3 py-16 md:mx-auto">
    <h1 className="text-center text-3xl font-bold">PROJECTS</h1>
    <VerticalProjectRow
      title="Project 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/project1.png"
      imageAlt="First project alt text"
      link="menew.be"
    />
    <VerticalProjectRow
      title="Project 2"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/project2.png"
      imageAlt="Second project alt text"
      link="w3schools.com"
      reverse
    />
    <VerticalProjectRow
      title="Project 3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/project3.png"
      imageAlt="Third project alt text"
      link="dinu.shop"
    />
  </div>
);

export { VerticalProjects };
