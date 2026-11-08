import firstPage from "../assets/about/page-1.png";
import secondPage from "../assets/about/page-2.png";
import "../styles/About.css";

function About() {
  return (
    <article className="about-document">
      <div className="about-pages" aria-hidden="true">
        <img src={firstPage} width="1632" height="2112" alt="" />
        <img src={secondPage} width="1632" height="2112" alt="" />
      </div>

      <div className="about-copy">
        <h1>About</h1>
        <h2>Why we built StudySpot</h2>
        <p>Finding somewhere to study shouldn't be another challenge in a student's day.</p>
        <p>Whether you need complete silence to prepare for an exam, a collaborative environment for a group project, or a space with specific amenities, finding the right place can take more time and effort than it should.</p>
        <p>We noticed that campuses already offer a variety of learning environments, but information about these spaces isn't always easy to find or compare.</p>
        <p>We believe the problem isn't always a lack of study spaces. Sometimes, it's a lack of access to information about them.</p>
        <p>That's why we created StudySpot: to bridge the gap between the resources campuses provide and the students who need them.</p>

        <h2>More than just a map!</h2>
        <p>StudySpot helps you find spaces that fit the way you work.</p>
        <ol>
          <li>Explore your campus: Discover study locations through an interactive map and explore spaces you might not have known existed.</li>
          <li>Find your ideal environment: Filter by noise level, study type, amenities, and accessibility to find spaces that match your needs.</li>
          <li>Make informed choices: Compare locations and understand why a space may be a good fit before heading there.</li>
        </ol>

        <h2>Why it matters</h2>
        <p>We believe access to education also means access to the environments where learning happens.</p>
        <p>By making study spaces easier to discover, we hope to:</p>
        <ul>
          <li>Promote equitable access: Help students with different learning and accessibility needs find suitable environments.</li>
          <li>Make better use of existing resources: Help students discover spaces beyond the usual crowded study spots.</li>
          <li>Give students time back: Reduce unnecessary searching and trial and error.</li>
          <li>Build a more connected campus: Make it easier for new students and longtime students alike to navigate available resources.</li>
        </ul>

        <h2>Our belief:</h2>
        <p>Built for students, inspired by community</p>
        <p>StudySpot was created with the Franklin &amp; Marshall College community in mind, starting with a simple question:</p>
        <p>What if every student could find a study space that works for them?</p>
        <p>We're starting at F&amp;M, but our vision extends beyond one campus. We hope to make discovering learning environments easier for students wherever they study.</p>
        <p>Because there's no one-size-fits-all way to learn, and there shouldn't be a one-size-fits-all place to study.</p>
      </div>
    </article>
  );
}

export default About;
