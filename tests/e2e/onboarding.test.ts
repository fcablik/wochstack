import {test} from '../playwright-utils.ts'

test('empty test for actions', async ({ page }) => {
	await page.goto('/')
})
