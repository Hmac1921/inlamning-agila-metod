import { Link } from 'react-router-dom'
import styles from '../pages/ProsAndCons.module.css'

function ProsAndCons() {
    return (
        <article className={styles.outer}>
            <section className={styles.headLine}><h1> - Pros and Cons -</h1></section>

            <section className={styles.waterfallPros}>
                <h2> Waterfall Model - Pros<br /><br /></h2>
                <p> The advantages of waterfall development are that it allows for departmentalization and control. A schedule can be set with deadlines for each stage of development and a product can proceed through the development process model phases one by one.<br /><br />

                    Development moves from concept, through design, implementation, testing, installation, troubleshooting, and ends up at operation and maintenance. Each phase of development proceeds in strict order.<br /><br />

                    Some of the major advantages of the Waterfall Model are as follows −<br /><br />

                    Simple and easy to understand and use<br /><br />

                    Easy to manage due to the rigidity of the model. Each phase has specific deliverables and a review process.<br /><br />

                    Phases are processed and completed one at a time.<br /><br />

                    Works well for smaller projects where requirements are very well understood.<br /><br />

                    Clearly defined stages.<br /><br />

                    Well understood milestones.<br /><br />

                    Easy to arrange tasks.<br /><br />

                    Process and results are well documented.<br /><br />
                </p>
            </section>
            <section className={styles.waterfallCons}>
                <h2> Waterfall Model - Cons<br /><br /></h2>
                <p>
                    The disadvantage of waterfall development is that it does not allow much reflection or revision. Once an application is in the testing stage, it is very difficult to go back and change something that was not well-documented or thought upon in the concept stage.<br /><br />

                    The major disadvantages of the Waterfall Model are as follows −<br /><br />

                    No working software is produced until late during the life cycle.<br /><br />

                    High amounts of risk and uncertainty.<br /><br />

                    Not a good model for complex and object-oriented projects.<br /><br />

                    Poor model for long and ongoing projects.<br /><br />

                    Not suitable for the projects where requirements are at a moderate to high risk of changing. So, risk and uncertainty is high with this process model.<br /><br />

                    It is difficult to measure progress within stages.<br /><br />

                    Cannot accommodate changing requirements.<br /><br />

                    Adjusting scope during the life cycle can end a project.<br /><br />

                    Integration is done as a "big-bang. at the very end, which doesn't allow identifying any technological or business bottleneck or challenges early.
                </p>

            </section>
            <section className={styles.agilePros}>
                <h2>Agile Method - Pros<br /><br /></h2>
                <p>
                    Rapid delivery<br />
                    The agile process allow you to deliver workable increments to your clients very quickly. They may not be perfect increments, but the understanding is that you will build upon these foundations on an ongoing basis. If you need to get something up and running fast, the agile approach is a good way to go about it.<br /><br />

                    Adaptable<br />
                    Because the increments are small, it’s very easy for projects to change direction and/or otherwise adapt to altering circumstances without undoing much of what has gone before.<br /><br />

                    Collaborative<br />
                    Agile working requires a lot of feeding back and forth between teams, clients, and customers. This makes for a collaborative environment in which silo walls are broken down and collective creativity often flourishes.<br /><br />

                    Quick problem detection<br />
                    You’re testing your increments on the go, so it quickly becomes apparent when problems crop up. Even better, the fragmented nature of what you’re doing means that you can usually pinpoint precisely where the problem lies and what’s causing it, so as to fix the issue with the next incremental cycle.<br /><br />

                    Transparent
                    You’re constantly showing your workings with the agile approach. Nothing can be hidden in the developmental archives – it’s all out there, in the open, happening before your very eyes.<br /><br />

                    Continuous improvement
                    When operating a waterfall approach, you can only evaluate performance once the project has completed development and is out in the marketplace. In order to improve, you must produce an entirely new and enhanced version.<br /><br />
                </p>
            </section>
            <section className={styles.agileCons}>
                <h2>Agile Method - Cons<br /><br /></h2>
                <p>
                    Tricky paradigm shift<br />
                    Some businesses and industries lend themselves naturally to the agile approach. For others, however, shifting from a sequential and schedule-bound mode to the more freeform agile approach can be a difficult change to manage. Teething troubles are inevitable but can easily be fixed.<br /><br />

                    Lack of specifics<br />
                    The ad-hoc, reactive nature of the agile method makes it hard to pin down specifics like deadlines and costs. This can lead to sloppy budgeting, poor timing, and a general dearth of practical boundaries to work to.<br /><br />

                    Ephemeral planning<br />
                    The agile ethos is in many ways more reactive than proactive. It’s about responding to issues and feedback in real-time. For many, this means that proper planning gets left behind in the rush to react, adapt, and improve. You need a strong core vision so that your overarching plan doesn’t get lost in the ongoing process.<br /><br />

                    Lack of overall cohesion<br />
                    All of this comes together to represent a lack of overall cohesion when using the agile approach. It’s all too easy for the continuous process to run away with itself, and for the goals to get lost in the details.

                    While it is perfectly possible to be both agile and cohesive, it takes strong leadership and a consistent strategy to keep everyone and every increment working towards the same vision.<br /><br /></p>
            </section>
            <section className={styles.buttonStyle}>
                <Link to={'/'}> <input className={styles.button} type="button" value="Back to start" /> </Link>
            </section>


        </article>

    );
}

export default ProsAndCons;