import child_process from 'node:child_process'

const commands = [
	
	// Install all dependencies.
	'npm install',
	
	// Build it.
	'npm run build',
	
	// Commit it.
	'cd ./build/',
	'git init -b master',
	'git add -A',
	'git commit -m "New deploy."',
	
	// Push it.
	'git push -f https://github.com/PeppeL-G/peterlg.git master:github-pages',
	
	// Remove build.
	'cd ..',
	'rm -rf build'
	
]

// Execute all commands.
const output = child_process.execSync(commands.join(' && '))
console.log(output.toString('utf8'))