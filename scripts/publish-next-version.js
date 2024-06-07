/**
 * Publish next version instructions
 * --------------------
 * This script will:
 * 
 * - Change the latest changelog entry in the app to contain a new release
 * - Add a new empty changelog entry in the app
 * - Create a new Git commit
 * - Deploy the app to the server
 * 
 * To run this script:
 * 
 * 1. Change the newVersion constant to correct value in the code below
 * 2. Run the following command in this file's parent folder:
 *    node ./scripts/publish-next-version.js
 */
import childProcess from "node:child_process"
import fs from "node:fs"

const newVersion = "?.?.?"

const pathToChangelogEntries = `./src/data/changelog-entries.js`

if (newVersion == `?.?.?`) {
	console.log(`Must change newVersion from "${newVersion}" to actual new version.`)
	process.exit(1)
}

prepareChangelogEntriesForPublish()
deployApp()
prepareChangelogEntriesForDev()
createCommit()
restoreScriptFile()

function prepareChangelogEntriesForPublish(){
	
	let changelogEntriesAsString = fs.readFileSync(
		pathToChangelogEntries,
		{ encoding: "utf8" },
	)
	
	changelogEntriesAsString = changelogEntriesAsString.replace(
		`?.?.?`,
		newVersion,
	)
	changelogEntriesAsString = changelogEntriesAsString.replace(
		`????-??-??`,
		new Date().toISOString().split('T')[0],
	)
	
	fs.writeFileSync(pathToChangelogEntries, changelogEntriesAsString)
	
}

function deployApp() {
	
	childProcess.execSync(
		`npm run deploy`,
	)
	
}

function prepareChangelogEntriesForDev(){
	
	let changelogEntriesAsString = fs.readFileSync(
		pathToChangelogEntries,
		{ encoding: "utf8" },
	)
	
	const find = `export const changelogEntries = [{`
	const replaceWith = `export const changelogEntries = [{
	version: \`?.?.?\`,
	date: \`????-??-??\`,
	changeDescriptions: [],
}, {`
	changelogEntriesAsString = changelogEntriesAsString.replace(
		find,
		replaceWith,
	)
	
	fs.writeFileSync(pathToChangelogEntries, changelogEntriesAsString)
	
}

function createCommit() {
	
	const pathToFilesToAdd = [
		pathToChangelogEntries,
		`./package-lock.json`,
	]
	
	childProcess.execSync(
		`git add ${pathToFilesToAdd.join(' ')}`,
	)
	
	childProcess.execSync(
		`git commit -m "Version ${newVersion}."`,
	)
	
	childProcess.execSync(
		`git push`,
	)
	
}

function restoreScriptFile() {
	
	const pathToScriptFile = `./scripts/publish-next-version.js`
	
	let scriptFileAsString = fs.readFileSync(
		pathToScriptFile,
		{ encoding: "utf8" },
	)
	
	scriptFileAsString = scriptFileAsString.replace(
		/const newVersion = "[0-9]+\.[0-9]+\.[0-9]+"/,
		`const newVersion = "?.?.?"`,
	)
	
	fs.writeFileSync(pathToScriptFile, scriptFileAsString)
	
}