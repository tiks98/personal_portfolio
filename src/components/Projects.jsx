import React from "react";

const Projects = () => {
	return (
		<div class="container py-5">
			<div class="row">
				<div class="col-md-6 mb-4 mb-md-0">
					<div class="h-100 overflow-hidden rounded-lg bg-light shadow-lg">
						<img
							src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
							loading="lazy"
							alt="by Martin Sanchez"
							class="img-fluid w-100 h-100 object-cover object-center"
						/>
					</div>
				</div>

				<div class="col-md-6 d-flex flex-column justify-content-center">
					<p class="text-center text-primary font-weight-bold mb-2 mb-md-3 text-md-left">
						Who we are
					</p>

					<h1 class="mb-3 text-center text-dark font-weight-bold mb-md-4 text-md-left">
						Our competitive advantage
					</h1>

					<p class="mb-4 text-muted">
						This is a section of some simple filler text, also known as
						placeholder text. It shares some characteristics of a real written
						text but is random or otherwise generated. It may be used to display
						a sample of fonts or generate text for testing. Filler text is dummy
						text which has no meaning however looks very similar to real text.
						<br />
						<br />
						This is a section of some simple filler text, also known as
						placeholder text. It shares some characteristics of a real written
						text but is random or otherwise generated. It may be used to display
						a sample of fonts or generate text for testing. Filler text is dummy
						text which has no meaning however looks very similar to real text.
					</p>

					<h2 class="mb-2 text-center text-dark font-weight-semibold text-md-left">
						About us
					</h2>

					<p class="text-muted">
						This is a section of some simple filler text, also known as
						placeholder text. It shares some characteristics of a real written
						text but is random or otherwise generated. It may be used to display
						a sample of fonts or generate text for testing. Filler text is dummy
						text which has no meaning however looks very similar to real text.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Projects;
