"use client";

import StoryCarouselComponent from "@/components/StoryCarouselComponent";
import WalletIndicator from "@/components/wallet/WalletIndicator";
import LoginComponent from "@/components/authentication/LoginComponent";

import Image from "next/image";
import * as Typewriter from "react-effect-typewriter";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/MainContext";
import StoryVerticalCarouselComponent from "@/components/StoryVerticalCarouselComponent";
import { UserAvatarComponent } from "@/components/shared/UserAvatarComponent";

export default function Home() {
	const movies = [
		{
			title: "Cold Motion",
			description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
			rating: 4.6,
			image: "/img/placeholder.png"
		},
		{
		  title: "The Life of Kal-El",
		  description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
		  rating: 4.9,
		  image: "/test/superman.jpeg"
		},
		{
		  title: "Blazing Trail",
		  description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
		  rating: 4.8,
		  image: "/test/dragon.png"
		},
		{
		  title: "Just a Joker",
		  description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability.",
		  rating: 4.7,
		  image: "/test/joker.jpeg"
		},

		{
		  title: "Life in Red",
		  description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
		  rating: 4.3,
		  image: "/test/painting.jpeg",		  
		},
		{
			title: "The Mad Kid",
			description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
			rating: 4.3,
			image: "/test/angry-boy.jpeg",		  
		  },
		
		{
		  title: "Road to Victory",
		  description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
		  rating: 4.2,
		  image: "/test/sea.jpeg",		  
		},
		{
			title: "The Dire Menace",
			description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
			rating: 4.5,
			image: "/test/wolf.png",		  
		  },
	];

    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [loginAuth, setLoginAuth] = useState<{ verifier: string, domain: string }|null>(null);
	
    const { 
        loggedIn, setLoggedIn,
        isLoggedIn, setIsLoggedIn,        
    } = useContext(AppContext);



	return (
		<div className="min-h-screen bg-[#f9f9f9]">
			<nav className="bg-white h-28 rounded-[25%_25%_25%_25%_/_0%_0%_100%_100%] fixed top-0 left-0 w-full z-10">
				<div className="px-[10rem] h-full flex items-center justify-between">
					<div className="logo">
						<Image src="/logo/fable_new_logo.svg" alt="Fable logo" className=" " width={90} height={90} />

					</div>

					{/* <WalletIndicator /> */}

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

						<div className="flex gap-5 items-center">
							{/* <WalletIndicator />
							<p>or</p> */}
							{ !isLoggedIn && <LoginComponent /> }

							{
								isLoggedIn && 
								<Link href="/dashboard" className='flex items-center py-4 cursor-pointer px-5 gap-3 rounded-xl bg-gradient-to-r from-[#AA4A41] to-[#33164C] hover:to-[#AA4A41] hover:from-[#33164C] transition-all duration-500'>
									<UserAvatarComponent
										width={25} 
										height={25} 
										borderRadius='rounded-lg'            
										imageUrl="/avatar/male_avatar1.svg"
									/>
									<p className="text-white font-semibold">Dashboard</p>
								</Link>
							}
							{
								<Link href="/stories">
									<div className="flex ">
										<div className="bg-[#D8D1DE3D] cursor-pointer border  flex items-center px-4 py-4 gap-2 rounded-xl border-gray-50 hover:bg-gray-200">
											<div className="stories-btn text-sm">
												See Stories
											</div>
											<div className="year-indicator bg-white text-lg rounded-3xl px-2 font-semibold">200</div>
										</div>
									</div>
								</Link>
							}
						</div>

					</div>
				</section>

				<section className="relative">
					<StoryCarouselComponent movies={movies}/>					 
				</section>

			</section>

			<section className="mt-38 px-20">
				<StoryVerticalCarouselComponent movies={movies}/>
			</section>
		</div>
	);
}
