# Training and adoption

A short learning experience that turns a vague status update into an actionable one.

**[Open the interactive project](https://ashabakercv.github.io/projects/training-and-adoption/demo/)**

## Scenario
A fictional implementation team writes updates with plenty of activity but unclear decisions. The learning experience teaches a repeatable way to state progress, blockers and next actions.

## Design decision
Teach one observable skill, show an example, let the learner practice and give specific feedback. Keep the job aid usable during real work.

## Explore the work
- [Learning Design](docs/learning-design.md)
- [Status Update Job Aid](docs/status-update-job-aid.md)
- [Adoption Plan](docs/adoption-plan.md)
- [Fictional source data](data/fixtures.json)
- [Functional logic](src/model.mjs)
- [Functional checks](tests/model.test.mjs)

## Run locally
Use Node.js 22 or later to run `npm test`. No dependency installation is required. To view the demo, serve this repository over local HTTP with any static server and open `/demo/`. For example: `python3 -m http.server 8000` followed by `http://localhost:8000/demo/`.

## Scope and limitations
This is a self-paced personal demonstration. Completion of its local quiz is not a credential and does not establish workplace adoption or training effectiveness.

## Contribution and provenance
This is an AI-assisted personal portfolio demonstration prepared for Asha Baker. The scenario, source records and sample responses are fictional. It is separate from employer deliverables and does not imply a production deployment, client outcome or prior employment in software engineering. Professional experience is described on the portfolio home page. Asha can use the documentation and source files to review, adapt and explain the implementation.

## Tools and relevant work
Learning objectives / Job aids / Knowledge checks. Relevant areas: AI and learning, Implementation.

## Version history
Version 1.0 introduces the documented scenario, browser demonstration, source data and functional checks. Subsequent changes should record the user need, change made and verification performed. GitHub Actions results should be described as passing only after a real workflow run succeeds.

## Reuse
The code and documentation are available for portfolio review. No license granting reuse has been selected; contact the owner for permission.
