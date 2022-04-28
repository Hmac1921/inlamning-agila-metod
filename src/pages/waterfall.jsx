import image from '../img/whatis-waterfall_model.png'
import styles from '../pages/waterfall.module.css'
import { Link } from 'react-router-dom'

function Waterfall() {
    return (
        <article className={styles.outer}>
            <h1>Waterfall method</h1>
            <p>The Waterfall Model was the first Process Model to be introduced. <br /><br /> It is also referred to as a linear-sequential life cycle model. It is very simple to understand and use. In a waterfall model, each phase must be completed before the next phase can begin and there is no overlapping in the phases.<br /><br />

                The Waterfall model is the earliest SDLC approach that was used for software development.<br /><br />

                The waterfall Model illustrates the software development process in a linear sequential flow. This means that any phase in the development process begins only if the previous phase is complete. In this waterfall model, the phases do not overlap.<br /><br /></p>
            <img className={styles.graphic} src={image} alt="waterfall" />

            <p>The sequential phases in Waterfall model are −<br /><br />

                Requirement Gathering and analysis − All possible requirements of the system to be developed are captured in this phase and documented in a requirement specification document.<br /><br />

                System Design − The requirement specifications from first phase are studied in this phase and the system design is prepared. This system design helps in specifying hardware and system requirements and helps in defining the overall system architecture.<br /><br />

                Implementation − With inputs from the system design, the system is first developed in small programs called units, which are integrated in the next phase. Each unit is developed and tested for its functionality, which is referred to as Unit Testing.<br /><br />

                Integration and Testing − All the units developed in the implementation phase are integrated into a system after testing of each unit. Post integration the entire system is tested for any faults and failures.<br /><br />

                Deployment of system − Once the functional and non-functional testing is done; the product is deployed in the customer environment or released into the market.<br /><br />

                Maintenance − There are some issues which come up in the client environment. To fix those issues, patches are released. Also to enhance the product some better versions are released. Maintenance is done to deliver these changes in the customer environment.<br /><br />

                All these phases are cascaded to each other in which progress is seen as flowing steadily downwards (like a waterfall) through the phases. The next phase is started only after the defined set of goals are achieved for previous phase and it is signed off, so the name "Waterfall Model". In this model, phases do not overlap.<br /><br />

                Waterfall Model - Application
                Every software developed is different and requires a suitable SDLC approach to be followed based on the internal and external factors. Some situations where the use of Waterfall model is most appropriate are −<br /><br />

                Requirements are very well documented, clear and fixed.<br /><br />

                Product definition is stable.<br /><br />

                Technology is understood and is not dynamic.<br /><br />

                There are no ambiguous requirements.<br /><br />

                Ample resources with required expertise are available to support the product.<br /><br />

                The project is short.</p>

            <Link to={'/'} > <input className={styles.button} type="button" value="Back to Start" /> </Link>
        </article>
    );
}

export default Waterfall;