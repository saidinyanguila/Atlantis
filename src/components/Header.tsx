import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, User2, X, Ghost } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { toast } from "sonner";


const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(true);
  	const { totalItems, setIsOpen } = useCart();

  	const [isSignInOpen, setIsSignInOpen] = useState(false);
  	const [isMale, setIsMale] = useState(true);
  	const [isRegistering, setIsRegistering] = useState(false);

	// Sign In
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Sign Up
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");

	const ToggleNav = () => {
		setIsMenuOpen(!isMenuOpen);
		setIsSearchOpen(false);
	}

	const ToggleSearch = () => {
		setIsMenuOpen(false);
		setIsSearchOpen(!isSearchOpen);
	}

	const ToggleCart = () => {
		setIsCartOpen(!isCartOpen);
		setIsOpen(isCartOpen);
	}

	// Auth
	const HandleSignIn = (e: React.FormEvent) => {
		e.preventDefault();

		if (!email || !password) {
			toast.error("Please fill in all fields");
			return;
		}

		console.log(email, password);
		toast.warning("Still working on user authentication");
	}

	const HandleSignUp = (e: React.FormEvent) => {
		e.preventDefault();

		if (!firstName || !lastName || !newEmail || !newPassword) {
			toast.error("Please fill in all fields");
			return;
		}
		
		console.log(firstName, lastName, newEmail, newPassword);
		toast.warning("Still working on user authentication");
	}

	const resetAuth = () => {
		setEmail("");
		setPassword("");

		setFirstName("");
		setLastName("");
		setNewEmail("");
		setNewPassword("");
	};
	// Auth
 
	const navLinks = [
		{ name: "New Arrivals", href: "#new" },
		{ name: "Women", href: "#women" },
		{ name: "Men", href: "#men" },
		{ name: "Accessories", href: "#accessories" },
		{ name: "Sale", href: "#sale" },
	];

	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
				{/* Mobile Search */}
				{isSearchOpen? 
					(
						<div className="md:hidden bg-background border-t border-border animate-fade-in">
							<nav className="container mx-auto px-3 py-3 flex flex-col gap-2">
								<div className="">
									<form action="/Hi" onSubmit={(e) => {
										e.preventDefault();
										alert("Submited");
									}}>
										<input type="text" className="w-[80%] h-10 pl-3 pr-[15%] border-2 outline-0" placeholder="Find your next favourite"/>
										<Search size={18} className="absolute right-[28%] top-[50%] -translate-y-1/2"></Search>
										<button onClick={() => ToggleSearch()} className="w-[20%] h-10 px-3" >Cancel</button>
									</form>
								</div>
							</nav>
						</div>
					) : 
					(
						<>
							<div className="container mx-auto px-4">
								<div className="flex items-center justify-between h-16 md:h-20">
									{/* Nav */}
									<div className="flex items-center gap-3 md:gap-8">
										<button onClick={() => ToggleNav()} className="md:hidden p-2 -ml-2" aria-label="Toggle menu">
											{isMenuOpen ? <X size={20} /> : <Menu size={20} />}
										</button>

										<Link to="/" className="font-serif text-xl md:text-2xl tracking-wide">
											ATLANTIS
										</Link>

										<nav className="hidden md:flex items-center gap-6">
											{navLinks.map((link) => (
												<a key={link.name} href={link.href} className="nav-link">
													{link.name}
												</a>
											))}
										</nav>
									</div>

									{/* Actions */}
									<div className="flex items-center gap-4">
										<button onClick={() => ToggleSearch()} className="md:hidden p-2 hover:opacity-70 transition-opacity" aria-label="Search">
											<Search size={20} />
										</button>
										
										<button onClick={() => ToggleCart()} className="p-2 hover:opacity-70 transition-opacity relative" aria-label="Shopping bag">
											{isCartOpen? <ShoppingCart size={20} /> : <X size={20} />}
											{totalItems > 0 && (
												<span className="absolute -top-1 -right-1 w-4 h-4 bg-foreground text-background text-[10px] flex items-center justify-center">
													{totalItems}
												</span>
											)}
										</button>

										<button onClick={() => setIsSignInOpen(true)} className="p-2 hover:opacity-70 transition-opacity relative" aria-label="Shopping bag">
											<User2 size={20} />
										</button>
									</div>
								</div>
							</div>

							{/* Mobile Navigation */}
							{isMenuOpen && (
								<div className="md:hidden bg-background border-t border-border animate-fade-in">
									<nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
										{navLinks.map((link) => (
										<a
											key={link.name}
											href={link.href}
											className="nav-link py-2"
											onClick={() => setIsMenuOpen(false)}
										>
											{link.name}
										</a>
										))}
									</nav>
								</div>
							)}
						</>
					)
				}
			</header>

			{/* Sign In Dialog */}
			<Dialog open={isSignInOpen} onOpenChange={setIsSignInOpen}>
				<DialogContent className="sm:max-w-md max-h-[80vh] overflow-auto py-10">
					{isRegistering? 
						(
							// Sign UP
							<>
								<DialogHeader>
									<DialogTitle className="font-serif text-2xl tracking-wide text-center">Sign Up</DialogTitle>
									<DialogDescription className="text-center">
										Create an account to shop on ATLANTIS
									</DialogDescription>
								</DialogHeader>

								<form onSubmit={HandleSignUp} className="flex flex-col gap-4 mt-4">
									<Input onChange={(e) => setNewEmail(e.target.value)} name="new_email" type="email" placeholder="Email address" className="h-11" />
									<Input onChange={(e) => setNewPassword(e.target.value)} name="new_password" type="password" placeholder="Create a Password" className="h-11" />
									<Input onChange={(e) => setFirstName(e.target.value)} name="f_name" type="text" placeholder="First Name" className="h-11" />
									<Input onChange={(e) => setLastName(e.target.value)} name="l_name" type="text" placeholder="Last Name" className="h-11" />
									
									<DialogDescription className="text-center mt-2 mb-0">
										I'll be primarily shopping for:
									</DialogDescription>

									<div className="flex gap-2 mb-4 -mt-2">
										<Button onClick={(e) => {e.preventDefault(); setIsMale(true)}} variant={isMale? "default" : "outline"} className="w-full mt-2">Men</Button>
										<Button onClick={(e) => {e.preventDefault(); setIsMale(false)}} variant={isMale? "outline" : "default"} className="w-full mt-2">Women</Button>
									</div>

									<Button type="submit" className="w-full mt-2">Create Account</Button>
									<p className="text-center text-sm text-muted-foreground">
										Already have an account?{" "}
										<button type="button" onClick={() => {resetAuth(); setIsRegistering(false)}} className="underline underline-offset-4 hover:text-foreground transition-colors">
											Log in
										</button>
									</p>
									<p className="text-lg text-center my-1">OR</p>
									
									<Button variant="outline" onClick={(e) => {e.preventDefault(); toast.error("Chill, we not there yet")}} className="w-full">
										<svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.29h6.48a5.54 5.54 0 0 1-2.4 3.63v3.02h3.88c2.27-2.09 3.53-5.17 3.53-8.67Z"
												fill="currentColor"/>
											<path
												d="M12 24c3.24 0 5.95-1.07 7.94-2.9l-3.88-3.02c-1.08.72-2.47 1.15-4.06 1.15-3.13 0-5.78-2.11-6.73-4.95H1.26v3.11A12 12 0 0 0 12 24Z"
												fill="currentColor"/>
											<path
												d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28V6.61H1.26A12 12 0 0 0 0 12c0 1.94.47 3.77 1.26 5.39l4.01-3.11Z"
												fill="currentColor"/>
											<path
												d="M12 4.77c1.77 0 3.35.61 4.6 1.8l3.45-3.45C17.94 1.19 15.23 0 12 0A12 12 0 0 0 1.26 6.61l4.01 3.11C6.22 6.88 8.87 4.77 12 4.77Z"
												fill="currentColor"/>
										</svg>
										Continue With Google
									</Button>
									
									<Button variant="outline" onClick={(e) => {e.preventDefault(); toast.error("Chill, we not there yet")}} className="w-full">
										<svg className="scale-150 mb-1 mr-2" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
											<path d="M16.365 1.43c0 1.14-.463 2.2-1.207 3.03-.81.89-2.14 1.58-3.27 1.49-.14-1.07.44-2.18 1.16-2.98.8-.91 2.18-1.57 3.32-1.54ZM20.5 17.42c-.45 1.01-.66 1.46-1.24 2.35-.81 1.22-1.96 2.74-3.39 2.75-1.27.01-1.6-.83-3.33-.83s-2.1.82-3.35.84c-1.42.02-2.5-1.36-3.31-2.58-2.26-3.45-2.5-7.49-1.1-9.62.99-1.51 2.55-2.39 4.02-2.39 1.55 0 2.52.84 3.8.84 1.24 0 1.99-.84 3.78-.84 1.31 0 2.69.72 3.68 1.96-3.24 1.78-2.72 6.43.44 7.52Z"/>
										</svg>
										Continue With Apple
									</Button>
								</form>
							</>
						) : 
						(
							// Sign In
							<>
								<DialogHeader>
									<DialogTitle className="font-serif text-2xl tracking-wide text-center">Sign In</DialogTitle>
									<DialogDescription className="text-center">
										Enter your credentials to access your account
									</DialogDescription>
								</DialogHeader>

								<form onSubmit={HandleSignIn} className="flex flex-col gap-4 mt-4">
									<Input onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="Email address" className="h-11" />
									<Input onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Password" className="h-11" />
									<Button type="submit" className="w-full mt-2">Sign In</Button>
									<p className="text-center text-sm text-muted-foreground">
										Don't have an account?{" "}
										<button type="button" onClick={() => {resetAuth(); setIsRegistering(true)}} className="underline underline-offset-4 hover:text-foreground transition-colors">
											Create one
										</button>
									</p>
									<p className="text-lg text-center my-1">OR</p>
									
									<Button variant="outline" onClick={(e) => {e.preventDefault(); toast.error("Chill, we not there yet")}} className="w-full">
										<svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.29h6.48a5.54 5.54 0 0 1-2.4 3.63v3.02h3.88c2.27-2.09 3.53-5.17 3.53-8.67Z"
												fill="currentColor"/>
											<path
												d="M12 24c3.24 0 5.95-1.07 7.94-2.9l-3.88-3.02c-1.08.72-2.47 1.15-4.06 1.15-3.13 0-5.78-2.11-6.73-4.95H1.26v3.11A12 12 0 0 0 12 24Z"
												fill="currentColor"/>
											<path
												d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28V6.61H1.26A12 12 0 0 0 0 12c0 1.94.47 3.77 1.26 5.39l4.01-3.11Z"
												fill="currentColor"/>
											<path
												d="M12 4.77c1.77 0 3.35.61 4.6 1.8l3.45-3.45C17.94 1.19 15.23 0 12 0A12 12 0 0 0 1.26 6.61l4.01 3.11C6.22 6.88 8.87 4.77 12 4.77Z"
												fill="currentColor"/>
										</svg>
										Sign In With Google
									</Button>
									
									<Button variant="outline" onClick={(e) => {e.preventDefault(); toast.error("Chill, we not there yet")}} className="w-full">
										<svg className="scale-150 mb-1 mr-2" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
											<path d="M16.365 1.43c0 1.14-.463 2.2-1.207 3.03-.81.89-2.14 1.58-3.27 1.49-.14-1.07.44-2.18 1.16-2.98.8-.91 2.18-1.57 3.32-1.54ZM20.5 17.42c-.45 1.01-.66 1.46-1.24 2.35-.81 1.22-1.96 2.74-3.39 2.75-1.27.01-1.6-.83-3.33-.83s-2.1.82-3.35.84c-1.42.02-2.5-1.36-3.31-2.58-2.26-3.45-2.5-7.49-1.1-9.62.99-1.51 2.55-2.39 4.02-2.39 1.55 0 2.52.84 3.8.84 1.24 0 1.99-.84 3.78-.84 1.31 0 2.69.72 3.68 1.96-3.24 1.78-2.72 6.43.44 7.52Z"/>
										</svg>
										Sign In With Apple
									</Button>
								</form>
							</>
						)
					}
					
				</DialogContent>
			</Dialog>
		</>
	);
};

export default Header;
