import StoryCarouselComponent from "@/components/StoryCarouselComponent";
import Image from "next/image";
import * as Typewriter from "react-effect-typewriter";


export default function Home() {
	const movies = [
		{
		  title: "The Shawshank Redemption",
		  description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
		  rating: 4.9
		},
		{
		  title: "The Godfather",
		  description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
		  rating: 4.8
		},
		{
		  title: "The Dark Knight",
		  description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability.",
		  rating: 4.7
		},
		{
		  title: "Pulp Fiction",
		  description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
		  rating: 4.6
		},
		{
		  title: "Inception",
		  description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
		  rating: 4.5
		},
		{
		  title: "Forrest Gump",
		  description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
		  rating: 4.4
		},
		{
		  title: "The Matrix",
		  description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
		  rating: 4.3
		},
		{
		  title: "Goodfellas",
		  description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
		  rating: 4.2
		}
	];


	return (
		<div className="min-h-screen bg-[#f9f9f9]">
			<nav className="bg-white h-28 rounded-[25%_25%_25%_25%_/_0%_0%_100%_100%] fixed top-0 left-0 w-full z-10">
				<div className="px-[10rem] h-full flex items-center justify-between">
					<div className="logo">
						<Image src="/logo/fable_new_logo.svg" alt="Fable logo" className=" " width={90} height={90} />

					</div>
					<div className="bg-[#D8D1DE3D] flex items-center p-2 gap-2 rounded-xl">
						<div className="stories-btn text-xs">
							Stories
						</div>
						<div className="year-indicator bg-white text-lg rounded-lg px-2 font-semibold">200</div>
					</div>
				</div>
			</nav>

			<section className="pt-[112px] grid grid-cols-2 px-[10rem] gap-5">
				<section className="hero flex flex-col justify-center">
					<div className="hero-left h-fit">
						{/* <h1 className="text-8xl font-bold">Reimagine Storytelling</h1> */}
						<Typewriter.Container typingSpeed={50}>

							<Typewriter.Paragraph  className="text-8xl font-bold">Reimagine Storytelling</Typewriter.Paragraph>
							{/* <p className="my-10"> */}
								<Typewriter.Paragraph className="my-10">
								Fable accelerates your storytelling journey with AI and blockchain.
								Unlock creativity, trade assets, and earn seamlessly.
								</Typewriter.Paragraph>
							{/* </p> */}
						</Typewriter.Container>
						<div className="flex">
							<div className="bg-[#D8D1DE3D] flex items-center p-2 gap-2 rounded-xl">
								<div className="stories-btn text-xs">
									Stories
								</div>
								<div className="year-indicator bg-white text-lg rounded-lg px-2 font-semibold">200</div>
							</div>
						</div>
					</div>
				</section>

				<section className="relative">
					<StoryCarouselComponent movies={movies}/>					 
				</section>

			</section>

			
		</div>
	);
}
