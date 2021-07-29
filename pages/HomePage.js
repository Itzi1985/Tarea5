import BasePage from "./BasePage"

export default class HomePage extends BasePage{

	constructor(...args){
		super(...args);
		this.navBar = "#nav";
		this.Subitem1 = "#pages-nav";
		this.Subitem2 = "#homeMenu";
		this.Subitem3 = "#feedback";
	}

	async visit()
	{
		await page.goto("http://zero.webappsecurity.com/index.html")
		await page.waitForSelector(this.navBar)
	}

	async isNavBarDisplayed()
	{
		await page.waitForSelector(this.Subitem1);
		await page.waitForSelector(this.Subitem2);
		await page.waitForSelector(this.Subitem3);
	}
}