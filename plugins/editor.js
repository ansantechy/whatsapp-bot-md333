const { bot, photoEditor } = require('../lib/')
const fm = true

bot(
	{
		pattern: 'skull',
		fromMe: fm,
		type: 'editor',
		desc: 'Skull Photo editor.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.sendMessage('*Reply to a image.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'skull'
		)
		if (!status) return await message.sendMessage(result)
		return await message.sendFromUrl(result)
	}
)
bot(
	{
		pattern: 'sketch',
		fromMe: fm,
		type: 'editor',
		desc: 'Sketch Photo editor.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.sendMessage('*Reply to a image.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'sketch'
		)
		if (!status) return await message.sendMessage(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'pencil',
		fromMe: fm,
		type: 'editor',
		desc: 'pencil Photo editor.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.sendMessage('*Reply to a image.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'pencil'
		)
		if (!status) return await message.sendMessage(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'color',
		fromMe: fm,
		type: 'editor',
		desc: 'color Photo editor.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.sendMessage('*Reply to a image.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'color'
		)
		if (!status) return await message.sendMessage(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'kiss',
		fromMe: fm,
		type: 'editor',
		desc: 'kiss Photo editor.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.sendMessage('*Reply to a image.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'kiss'
		)
		if (!status) return await message.sendMessage(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'bokeh',
		fromMe: fm,
		type: 'editor',
		desc: 'bokeh Photo editor.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.sendMessage('*Reply to a image.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'bokeh'
		)
		if (!status) return await message.sendMessage(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'wanted',
		fromMe: fm,
		type: 'editor',
		desc: 'Wanted Photo editor.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.sendMessage('*Reply to a image.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'wanted'
		)
		if (!status) return await message.sendMessage(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'look',
		fromMe: fm,
		type: 'editor',
		desc: 'Dramatic Look Photo editor.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.sendMessage('*Reply to a image.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'look'
		)
		if (!status) return await message.sendMessage(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'gandm',
		fromMe: fm,
		type: 'editor',
		desc: 'Dramatic Look Photo editor.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.sendMessage('*Reply to a image.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'gandm'
		)
		if (!status) return await message.sendMessage(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'dark',
		fromMe: fm,
		type: 'editor',
		desc: 'Dramatic Look Photo editor.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.sendMessage('*Reply to a image.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'dark'
		)
		if (!status) return await message.sendMessage(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'makeup',
		fromMe: fm,
		type: 'editor',
		desc: 'Dramatic Look Photo editor.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.sendMessage('*Reply to a image.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'makeup'
		)
		if (!status) return await message.sendMessage(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'cartoon',
		fromMe: fm,
		type: 'editor',
		desc: 'Dramatic Look Photo editor.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.sendMessage('*Reply to a image.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'cartoon'
		)
		if (!status) return await message.sendMessage(result)
		return await message.sendFromUrl(result)
	}
)
