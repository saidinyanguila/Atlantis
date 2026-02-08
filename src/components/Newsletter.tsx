import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const Newsletter = () => {
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [apiURL, setApiURL] = useState("https://saidinyanguila.pythonanywhere.com/atlantis/sign-up-newsletter");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Handle newsletter signup
		const request = await fetch(`https://corsproxy.io/?${apiURL}`, {
			method: "POST",
			headers: {
				"content-type" : "application/json"
			},
			body:JSON.stringify({
				"email": email
			})
		});

		const response = await request.json();
		console.log(response);
		setIsSubmitted(true);
	};

	const reset = () => {
		setEmail("");
		setIsSubmitted(false);
	} 

	return (
		<section className="py-20 md:py-32 bg-foreground text-background">
			<div className="container mx-auto px-6">
				<div className="max-w-2xl mx-auto text-center">
					{isSubmitted? 
						(
							<>
								<p className="text-background/70 mb-8">
									The email <span className="underline underline-offset-4 hover:text-foreground transition-colors">{email}</span> has subscribed to our newsletter.
								</p>
								<p className="text-background/70 mb-8">
									Click <button onClick={() => reset()} className="underline underline-offset-4 hover:text-foreground transition-colors">here</button> to add othe email address.
								</p>
							</>
						) : 
						(
							<>
								<h2 className="font-serif text-3xl md:text-5xl mb-4">Stay in Style</h2>
								<p className="text-background/70 mb-8">
									Subscribe to receive exclusive access to new arrivals, special offers, and curated style guides.
								</p>

								<form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
									<Input required type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}
									className="bg-transparent border-background/30 text-background placeholder:text-background/50 focus:border-background"/>
									
									<Button type="submit" variant="secondary" className="bg-background text-foreground hover:bg-background/90 whitespace-nowrap">
										Subscribe
									</Button>
								</form>

								<p className="text-xs text-background/50 mt-4">
									By subscribing, you agree to receive marketing communications from us.
								</p>
							</>
						)
					}
				</div>
			</div>
		</section>
			
	);
};

export default Newsletter;
