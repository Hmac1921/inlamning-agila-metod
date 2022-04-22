import image from '../img/avsw.png'

function Start() {
    return (
        <article>
            <section className={'header'}>
                <h1>Welcome to the agile and waterfall methodologies resource</h1>
                <img src={image} alt="agile vs waterfall diagram" />
                <p>Differences Between Agile vs. Waterfall
                    Both methodologies can help developers produce high-quality project management. Depending on the specific project requirement, knowing the difference between agile and waterfall can better equip a development team to choose the right process and methods in delivering a successful software project. Some of the distinct differences are:

                    Agile is an incremental and iterative approach; Waterfall is a linear and sequential approach.
                    Agile separates a project into sprints; Waterfall divides a project into phases.
                    Agile helps complete many small projects; Waterfall helps complete one single project.
                    Agile introduces a product mindset with a focus on customer satisfaction; Waterfall focuses on successful project delivery.
                    Requirements are prepared everyday in Agile, while requirements are prepared once at the start in Waterfall.
                    Agile allows requirement changes at any time; Waterfall avoids scope changes once the project starts.
                    Testing is performed concurrently with development in Agile; testing phase comes only after the build phase in a Waterfall project.
                    Test teams in Agile can take part in requirements change; test teams in Waterfall do not get involved in requirements change
                    Agile enables the project team to operate without a dedicated project manager; Waterfall requires a project manager who plays an essential role in every phase.</p>
            </section>
            <article>
                <section>
                    The waterfall methodology is a linear project management approach, where stakeholder and customer requirements are gathered at the beginning of the project, and then a sequential project plan is created to accommodate those requirements. The waterfall model is so named because each phase of the project cascades into the next, following steadily down like a waterfall.

                    It’s a thorough, structured methodology and one that’s been around for a long time, because it works. Some of the industries that regularly use the waterfall model include construction, IT and software development. As an example, the waterfall software development life cycle, or waterfall SDLC, is widely used to manage software engineering projects.
                    <button>Learn More</button>
                </section>
                <section>
                    Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value.

                    Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems. Scrum co-creators Ken Schwaber and Jeff Sutherland have written The Scrum Guide to explain Scrum clearly and succinctly.  This Guide contains the definition of Scrum. This definition consists of Scrum’s accountabilities, events, artifacts, and the rules that bind them together.

                    In a nutshell, Scrum requires a Scrum Master to foster an environment where:

                    A Product Owner orders the work for a complex problem into a Product Backlog.
                    The Scrum Team turns a selection of the work into an Increment of value during a Sprint.
                    The Scrum Team and its stakeholders inspect the results and adjust for the next Sprint.
                    Repeat
                    <button>Learn More</button>
                </section>
            </article>
        </article>
    );
}

export default Start;