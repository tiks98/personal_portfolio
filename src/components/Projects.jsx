import React from "react";

const Projects = () => {
	return (
		<div className="bg-transparent py-6 sm:py-8 lg:py-12">
			<div className="mx-auto max-w-screen-xl px-4 md:px-8">
				<div className="grid gap-8 md:grid-cols-2 lg:gap-12">
					<div>
						{/* <div className="h-64 rounded-lg bg-gray-100 shadow-lg md:h-auto">
							<img
								src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
								loading="lazy"
								alt="by Martin Sanchez"
								className="h-3/6 w-3/6 object-cover object-center"
							/>
						</div> */}
					</div>

					<div className="md:pt-8">
						<p className="text-center font-bold text-indigo-300 md:text-left">
							Who we are
						</p>

						<h1 className="mb-4 text-center text-2xl font-bold text-white-800 sm:text-3xl md:mb-6 md:text-left">
							Our competitive advantage
						</h1>

						<p className="mb-6 text-gray-200 sm:text-lg md:mb-8">
							This is a section of some simple filler text, also known as
							placeholder text. It shares some characteristics of a real written
							text but is random or otherwise generated. It may be used to
							display a sample of fonts or generate text for testing. Filler
							text is dummy text which has no meaning however looks very similar
							to real text.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
