'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
				>
					<div className="flex items-center gap-2 mb-4">
						<div className="w-3 h-3 rounded-full bg-red-500" />
						<div className="w-3 h-3 rounded-full bg-yellow-500" />
						<div className="w-3 h-3 rounded-full bg-green-500" />
					</div>
					<div className="font-mono">
						<p className="text-green-500">$ whoami</p>
						<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Berk Karadalan</h1>
						<p className="text-gray-400 mb-2">Backend Developer</p>
						<p className="text-gray-400 mb-2">📍 Istanbul/Turkey</p>
						<p className="text-green-500">$ cat ./about.me</p>
						<p className="text-gray-400 mb-5">Hey 👋, I’m a backend developer with experience in DevOps and system operations. I like solving complex problems, optimizing infrastructure, and making things more efficient. I focus on building reliable and scalable systems while always looking for ways to improve.</p>
						
						<p className="text-green-500">$ history | grep career</p>
						<div className="flex flex-col gap-2 mt-2">
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Confidential Company | Backend Developer<span className="text-xs text-gray-500 pl-3">11/2023 - Present</span></span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">MediaNova CDN | DevOps<span className="text-xs text-gray-500 pl-3">11/2022 - 11/2023</span></span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">MediaNova CDN | SysOps<span className="text-xs text-gray-500 pl-3">03/2022 - 11/2022</span></span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">BSH Turkey | Accounting Intern <span className="text-xs text-gray-500 pl-3">09/2016 - 06/2017</span></span>
						</div>
						
						<p className="text-green-500 mt-5">$ skills</p>
						<div className="flex flex-wrap gap-2 mt-2">
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Python</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Go</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Java</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Docker</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Kubernetes</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Linux Systems</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Nginx</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">MongoDB</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">SQL</span>
						</div>

					</div>

				<p className="text-green-500 mt-8 mb-2">$ contact --email</p>
							<motion.a
								href="mailto:berkkaradalan@gmail.com"
								whileHover={{ scale: 1.02 }}
								className="inline-block px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
							>
								📧 berkkaradalan@gmail.com
				</motion.a>

				<p className="text-green-500 mt-8 mb-4">$ ls ./social-links</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								<motion.a
									href="https://github.com/berkkaradalan/"
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
								>
									<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
										<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-200">GitHub</p>
										<p className="text-sm text-gray-400">@berkkaradalan</p>
									</div>
								</motion.a>
								<motion.a
									href="https://www.linkedin.com/in/berkkaradalan/"
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
								>
									<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
										<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
											<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-200">LinkedIn</p>
										<p className="text-sm text-gray-400">Berk Karadalan</p>
									</div>
								</motion.a>
								<motion.a
									href="https://x.com/benbevk"
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
								>
									<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
										<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-200">X</p>
										<p className="text-sm text-gray-400">@benbevk</p>
									</div>
								</motion.a>
							</div>
				</motion.div>
				
			</div>
		</section>
	);
}
