const appendOptionsToPayload = (
    payload,
    optionSelections,
    optionCodes = null
) => {
    const { item } = payload;
    const { variants } = item;

    if (!optionCodes) {
        optionCodes = new Map();
        for (const option of item.configurable_options) {
            optionCodes.set(option.attribute_id, option.attribute_code);
        }
    }

    const options = Array.from(optionSelections, ([id, value]) => ({
        option_id: id,
        option_value: value
    }));

    const selectedVariant = variants.find(({ product: variant }) => {
        for (const [id, value] of optionSelections) {
            const code = optionCodes.get(id);

            if (variant[code] !== value) {
                return false;
            }
        }

        return true;
    });

    Object.assign(payload, {
        options,
        parentSku: item.sku,
        item: Object.assign({}, item.product)
    });

    return payload;
};

export default appendOptionsToPayload;