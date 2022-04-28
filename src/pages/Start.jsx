import image from '../img/avsw.png'
import styles from '../pages/Start.module.css'
import { Link } from 'react-router-dom'

function Start() {
    return (
        <article className={styles.header}>
            <section className={styles.headerItems} >

                <h1> - Agile and waterfall methodologies resource - </h1>
                <img src={image} alt="agile vs waterfall diagram" />
            </section>


            <section className={styles.waterfallInfo}>
                <h2>Waterfall method</h2>
                The waterfall methodology is a linear project management approach, where stakeholder and customer requirements are gathered at the beginning of the project, and then a sequential project plan is created to accommodate those requirements. The waterfall model is so named because each phase of the project cascades into the next, following steadily down like a waterfall.<br /><br />

                It’s a thorough, structured methodology and one that’s been around for a long time, because it works. Some of the industries that regularly use the waterfall model include construction, IT and software development. As an example, the waterfall software development life cycle, or waterfall SDLC, is widely used to manage software engineering projects.
                <Link to={"/waterfall"}><input className={styles.button} type="button" value="Learn more" /> </Link>
            </section>
            <section className={styles.agileInfo}>
                <h2>Agile and Scrum method</h2>
                Agile development is a project management methodology characterized by building products using short cycles of work that allow for rapid production and constant revision.<br /><br />
                Scrum development is a PM methodology in which a small team is led by a Scrum master, whose main job is to clear away all obstacles to completing work. Work is done in short cycles called sprints, but the team meets daily to discuss current tasks and roadblocks.<br /><br />
                Kanban is often used as a tool in these methods, Kanban is a visual approach to project management where teams create physical representations of their tasks, often using sticky notes on whiteboards (or online apps). Tasks are moved through predetermined stages to track progress and identify common roadblocks.

                <Link to={"/agile"}><input className={styles.button} type="button" value="Learn more" /> </Link>
            </section>
            <section className={styles.compared}>
                <h2>  Differences Between Agile vs. Waterfall</h2>
                <p> Both methodologies can help developers produce high-quality project management. Depending on the specific project requirement, knowing the difference between agile and waterfall can better equip a development team to choose the right process and methods in delivering a successful software project. Some of the distinct differences are:<br /><br />

                    Agile is an incremental and iterative approach; Waterfall is a linear and sequential approach.<br /><br />
                    Agile separates a project into sprints; Waterfall divides a project into phases.<br /><br />
                    Agile helps complete many small projects; Waterfall helps complete one single project.<br /><br />
                    Agile introduces a product mindset with a focus on customer satisfaction; Waterfall focuses on successful project delivery.<br /><br />
                    Requirements are prepared everyday in Agile, while requirements are prepared once at the start in Waterfall.<br /><br />
                    Agile allows requirement changes at any time; Waterfall avoids scope changes once the project starts.<br /><br />
                    Testing is performed concurrently with development in Agile; testing phase comes only after the build phase in a Waterfall project.<br /><br />
                    Test teams in Agile can take part in requirements change; test teams in Waterfall do not get involved in requirements change<br /><br />
                    Agile enables the project team to operate without a dedicated project manager; Waterfall requires a project manager who plays an essential role in every phase.</p>
                <Link to={'/prosAndCons'}> <input className={styles.button} type="button" value="Pros and Cons" /> </Link>
            </section>

        </article>
    );
}

export default Start;