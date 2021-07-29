import jestConfig from "../jest.config";
import HomePage from "../pages/HomePage";

describe("Home", () => {
	let homePage;

	beforeAll(async () =>{
		jest.setTimeout(90*1000);
		homePage = new HomePage();
	});

	it("homepage should be displayed", async() => {
		await homePage.visit();
	},20000);

	it("navbar should be displayed", async () => {
		await homePage.isNavBarDisplayed();
		const url = await homePage.getUrl();
		console.log(url);
	});
});