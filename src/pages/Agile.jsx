import styles from '../pages/Agile.module.css'
import { Link } from 'react-router-dom'

function Agile() {
    return (
        <article className={styles.outer}>
            <h1>Agile Method</h1>
            <div className={styles.graphic}></div>
            <section>
                <h1>Scrum rolls</h1>

                <h2> Developers</h2>
                <p>
                    Developers are the people in the Scrum Team that are committed to creating any aspect of a usable Increment each Sprint.

                    The specific skills needed by the Developers are often broad and will vary with the domain of work. However, the Developers are always accountable for:

                    Creating a plan for the Sprint, the Sprint Backlog;

                    Instilling quality by adhering to a Definition of Done;

                    Adapting their plan each day toward the Sprint Goal; and,

                    Holding each other accountable as professionals.</p>

                <h2> Product Owner</h2>
                <p>  The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. How this is done may vary widely across organizations, Scrum Teams, and individuals.

                    The Product Owner is also accountable for effective Product Backlog management, which includes:

                    Developing and explicitly communicating the Product Goal;

                    Creating and clearly communicating Product Backlog items;

                    Ordering Product Backlog items; and,

                    Ensuring that the Product Backlog is transparent, visible and understood.

                    The Product Owner may do the above work or may delegate the responsibility to others. Regardless, the Product Owner remains accountable.

                    For Product Owners to succeed, the entire organization must respect their decisions. These decisions are visible in the content and ordering of the Product Backlog, and through the inspectable Increment at the Sprint Review.

                    The Product Owner is one person, not a committee. The Product Owner may represent the needs of many stakeholders in the Product Backlog. Those wanting to change the Product Backlog can do so by trying to convince the Product Owner.</p>

                <h2>Scrum Master</h2>
                <p> The Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide. They do this by helping everyone understand Scrum theory and practice, both within the Scrum Team and the organization.

                    The Scrum Master is accountable for the Scrum Team’s effectiveness. They do this by enabling the Scrum Team to improve its practices, within the Scrum framework.

                    Scrum Masters are true leaders who serve the Scrum Team and the larger organization.

                    The Scrum Master serves the Scrum Team in several ways, including:

                    Coaching the team members in self-management and cross-functionality;

                    Helping the Scrum Team focus on creating high-value Increments that meet the Definition of Done;

                    Causing the removal of impediments to the Scrum Team’s progress; and,

                    Ensuring that all Scrum events take place and are positive, productive, and kept within the timebox.

                    The Scrum Master serves the Product Owner in several ways, including:

                    Helping find techniques for effective Product Goal definition and Product Backlog management;

                    Helping the Scrum Team understand the need for clear and concise Product Backlog items;

                    Helping establish empirical product planning for a complex environment; and,

                    Facilitating stakeholder collaboration as requested or needed.

                    The Scrum Master serves the organization in several ways, including:

                    Leading, training, and coaching the organization in its Scrum adoption;

                    Planning and advising Scrum implementations within the organization;

                    Helping employees and stakeholders understand and enact an empirical approach for complex work; and,

                    Removing barriers between stakeholders and Scrum Teams.</p>
            </section>
            <section>
                <h2>Sprint Backlog</h2>
                <p>
                    The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how).

                    The Sprint Backlog is a plan by and for the Developers. It is a highly visible, real-time picture of the work that the Developers plan to accomplish during the Sprint in order to achieve the Sprint Goal. Consequently, the Sprint Backlog is updated throughout the Sprint as more is learned. It should have enough detail that they can inspect their progress in the Daily Scrum.

                    Commitment: Sprint Goal
                    The Sprint Goal is the single objective for the Sprint. Although the Sprint Goal is a commitment by the Developers, it provides flexibility in terms of the exact work needed to achieve it. The Sprint Goal also creates coherence and focus, encouraging the Scrum Team to work together rather than on separate initiatives.

                    The Sprint Goal is created during the Sprint Planning event and then added to the Sprint Backlog. As the Developers work during the Sprint, they keep the Sprint Goal in mind. If the work turns out to be different than they expected, they collaborate with the Product Owner to negotiate the scope of the Sprint Backlog within the Sprint without affecting the Sprint Goal.</p>
            </section>

            <section>
                <h2>Backlog</h2>
                <p>What is a product backlog?
                    A product backlog is a prioritized list of work for the development team that is derived from the roadmap and its requirements. The most important items are shown at the top of the product backlog so the team knows what to deliver first. The development team doesn't work through the backlog at the product owner's pace and the product owner isn't pushing work to the development team. Instead, the development team pulls work from the product backlog as there is capacity for it, either continually (kanban) or by iteration (scrum).  </p>
            </section>
            <section>
                <h2>Sprint planning</h2>
                <p>Sprint planning is an event in scrum that kicks off the sprint. The purpose of sprint planning is to define what can be delivered in the sprint and how that work will be achieved. Sprint planning is done in collaboration with the whole scrum team.<br /><br />

                    Unlike in sport, scrum encourages you to be always sprinting so you can deliver working software, while continuously learning and improving.
                    In scrum, the sprint is a set period of time where all the work is done. However, before you can leap into action you have to set up the sprint. You need to decide on how long the time box is going to be, the sprint goal, and where you're going to start. The sprint planning session kicks off the sprint by setting the agenda and focus. If done correctly, it also creates an environment where the team is motivated, challenged, and can be successful. Bad sprint plans can derail the team by setting unrealistic expectations.<br /><br />

                    The What –  The product owner describes the objective(or goal) of the sprint and what backlog items contribute to that goal. The scrum team decides what can be done in the coming sprint and what they will do during the sprint to make that happen.<br /><br />
                    The How – The development team plans the work necessary to deliver the sprint goal. Ultimately, the resulting sprint plan is a negotiation between the development team and product owner based on value and effort.<br /><br />
                    The Who – You cannot do sprint planning without the product owner or the development team. The product owner defines the goal based on the value that they seek. The development team needs to understand how they can or cannot deliver that goal. If either is missing from this event it makes planning the sprint almost impossible.<br /><br />
                    The Inputs – A great starting point for the sprint plan is the product backlog as it provides a list of ‘stuff’ that could potentially be part of the current sprint. The team should also look at the existing work done in the increment and have a view to capacity.<br /><br />
                    The Outputs – The most important outcome for the sprint planning meeting is that the team can describe the goal of the sprint and how it will start working toward that goal. This is made visible in the sprint backlog.</p>
            </section>
            <section>
                <h2>Sprints</h2>
                <p>A sprint is a short, time-boxed period when a scrum team works to complete a set amount of work. Sprints are at the very heart of scrum and agile methodologies, and getting sprints right will help your agile team ship better software with fewer headaches.

                    “With scrum, a product is built in a series of iterations called sprints that break down big, complex projects into bite-sized pieces," said Megan Cook, Group Product Manager for Jira Software at Atlassian.  </p>
            </section>
            <section>
                <h2>Scrum artifacts</h2>
                <p>Agile scrum artifacts are information that a scrum team and stakeholders use to detail the product being developed, actions to produce it, and the actions performed during the project.  These artifacts provide metadata points that give insight into the performance of a sprint. They are essential tools for every scrum team since they enable core scrum attributes of transparency, inspection, and adaption.<br /><br />

                    Artifacts are created during the main activities of a scrum sprint: <br /><br />

                    Plan work and future goals<br /><br />
                    Create tasks to achieve these goals<br /><br />
                    Organize tasks into sprints based on dependency and priority<br /><br />
                    Execute the tasks<br /><br />
                    Review and analyze results in order to compare to the goals<br /><br />
                    Repeat these steps</p>
            </section>
            <section>
                <h2>Sprint reviews</h2>
                <p>Sprint reviews are not retrospectives. A sprint review is about demonstrating the hard work of the entire team: designers, developers, and the product owner. At Atlassian we like to keep our sprint reviews casual. Team members gather around a desk for informal demos and describe the work they’ve done for that iteration. It’s a time to ask questions, try new features, and give feedback. Sharing in success is an important part of building an agile team.</p>
            </section>
            <section>
                <h2>Sprint Retrospective</h2>
                <p>Retrospectives are an excellent opportunity for your agile team to evaluate itself and create a plan to address areas of improvement for the future. The retrospective embraces the ideal of continuous improvement - and protects against the pitfalls of complacency - by stepping outside the work cycle to reflect on the past:<br /><br />

                    The purpose of the retrospective meeting is to:<br /><br />

                    Evaluate how the last sprint, iteration, or work item went, specifically around the team dynamic, processes, and tools.<br /><br />
                    Articulate and stack rank the items that went well, and those items that did not.<br /><br />
                    Create and implement a plan for improving the way the team does work.<br /><br />
                    The retrospective provides a safe place to focus on introspection and adaptation. In order for retrospectives to be successful, there needs to be a supportive atmosphere that encourages (but doesn’t force) all team members to contribute.</p>
            </section>

            <section>
                <h2>Kanban</h2>
                <p>Kanban is all about visualizing your work, limiting work in progress, and maximizing efficiency (or flow). Kanban teams focus on reducing the time a project takes (or user story) from start to finish. They do this by using a kanban board and continuously improving their flow of work.

                    Scrum teams commit to completing an increment of work, which is potentially shippable, through set intervals called sprints. Their goal is to create learning loops to quickly gather and integrate customer feedback. Scrum teams adopt specific roles, create special artifacts, and hold regular ceremonies to keep things moving forward. Scrum is best defined in The Scrum Guide.</p>
            </section>
            <section>
                <h2>Agile estimation</h2>
                <p>Agile estimation is the process for estimating the effort required to complete a prioritized task in the product backlog. This effort is usually measured with respect to the time it will take to complete that task, which, in turn, leads to accurate sprint planning.<br /><br />

                    The story points approach in the Agile estimation technique uses historical data to compare features of previous, similar projects to generate a precise estimate.<br /><br />

                    The steps involved in the estimation method with story points are as follows:<br /><br />

                    Identify user stories<br /><br />
                    Discuss the requirements of the user story. It is the responsibility of the Product Owner or business analyst to answer the questions and explain what precisely the referred story entails<br /><br />
                    Create a matrix for estimation: The estimation matrix is a numeric scale that is used to evaluate the selected pieces of work. This scale can be the Fibonacci sequence (…5, 8, 13, 21, 34 …) or the straightforward linear scale (… 3, 4, 5, 6, 7 …).<br /><br />
                    Many teams prefer the Fibonacci scale because the gaps between numbers in this series are more extensive than in the linear scale. This simplifies visualizing the difference between the values assigned to the separate tasks.<br /><br />
                    Choose an Agile estimation technique<br /><br />
                    Conduct sprint planning<br /><br />
                    Validate that the estimates are internally consistent and align with the stories as the process goes along</p>

                <p>
                    <br /><br /> -- The Sydney Opera House is a good physical example of how a project can quickly get off track. The Sydney Opera House was anticipated to be completed in 4 years with a budget of $7 million AUD. In reality, it took 14 years to be completed and ended up costing $102 million AUD (i.e., delayed by ten years with a budget percentage difference of 1457%). --<br /><br />

                    Bang for the Buck is a strategy for facilitating collaboration between the product manager and development teams. The goal is to prioritize backlog items. Rather than moving through your agenda without prioritizing what needs to get done, the Bang for the Buck model empowers you to identify the costs and benefits associated with various tasks. You can then assign scores (calculated using story points) to each task based on the “bang for your buck” you can expect to get from the task. With your scores in hand, you can then organize your tasks based on the order in which you can complete them. Finally, graph each task according to cost and value so you can start checking things off of your to-do list.


                </p>
            </section>
            <section>
                <h2>Pros and Cons</h2>
                <p>Pros of the agile methodology<br /><br />
                    Rapid delivery
                    The agile process allow you to deliver workable increments to your clients very quickly. They may not be perfect increments, but the understanding is that you will build upon these foundations on an ongoing basis. If you need to get something up and running fast, the agile approach is a good way to go about it.<br /><br />

                    Adaptable
                    Because the increments are small, it’s very easy for projects to change direction and/or otherwise adapt to altering circumstances without undoing much of what has gone before.<br /><br />

                    Collaborative
                    Agile working requires a lot of feeding back and forth between teams, clients, and customers. This makes for a collaborative environment in which silo walls are broken down and collective creativity often flourishes.<br /><br />

                    Quick problem detection
                    You’re testing your increments on the go, so it quickly becomes apparent when problems crop up. Even better, the fragmented nature of what you’re doing means that you can usually pinpoint precisely where the problem lies and what’s causing it, so as to fix the issue with the next incremental cycle.<br /><br />

                    Transparent
                    You’re constantly showing your workings with the agile approach. Nothing can be hidden in the developmental archives – it’s all out there, in the open, happening before your very eyes.<br /><br />

                    Continuous improvement
                    When operating a waterfall approach, you can only evaluate performance once the project has completed development and is out in the marketplace. In order to improve, you must produce an entirely new and enhanced version.<br /><br />


                    Cons of the agile methodology<br /><br />
                    Tricky paradigm shift
                    Some businesses and industries lend themselves naturally to the agile approach. For others, however, shifting from a sequential and schedule-bound mode to the more freeform agile approach can be a difficult change to manage. Teething troubles are inevitable but can easily be fixed.<br /><br />

                    Lack of specifics
                    The ad-hoc, reactive nature of the agile method makes it hard to pin down specifics like deadlines and costs. This can lead to sloppy budgeting, poor timing, and a general dearth of practical boundaries to work to.<br /><br />

                    Ephemeral planning
                    The agile ethos is in many ways more reactive than proactive. It’s about responding to issues and feedback in real-time. For many, this means that proper planning gets left behind in the rush to react, adapt, and improve. You need a strong core vision so that your overarching plan doesn’t get lost in the ongoing process.<br /><br />

                    Lack of overall cohesion
                    All of this comes together to represent a lack of overall cohesion when using the agile approach. It’s all too easy for the continuous process to run away with itself, and for the goals to get lost in the details.

                    While it is perfectly possible to be both agile and cohesive, it takes strong leadership and a consistent strategy to keep everyone and every increment working towards the same vision.<br /><br /></p>
            </section>
            <Link to={'/'} > <input className={styles.button} type="button" value="Back to Start" /></Link>
        </article>
    );
}

export default Agile;