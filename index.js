class FileInputEvent
{
    /**
     * @param {string} selector_input_file Input file selector
     */
    constructor
    (
        selector_input_file,
        selector_clear_btn = null
    )
    {
        let _this = this;

        this.ready = false;

        this.files = [];

        this.ready_status_callback = () => {};

        if((typeof selector_clear_btn).toLowerCase() === 'string')
        {
            $(document).on('click', selector_clear_btn, () => {
                $(selector_input_file).val('').trigger('change');
                _this.files = [];
            });
        }

        $(document).on('change', selector_input_file, (e) => {
            _this.files = Array.from(e.currentTarget.files);

            _this.ready = _this.files.length > 0;

            _this.ready_status_callback(_this.ready, _this.files, _this.getFilesSize());
        });
    }

    getFilesSize()
    {

        let size = 0;

        this.files.forEach((file) => size += file.size);

        return size;
    }

    getFiles()
    {
        return Array.isArray(this.files) ? this.files : [];
    }

    setReadyStatusCallback(callback)
    {
        this.ready_status_callback = callback;

        return this;
    }
}

const $ = require('jquery');

module.exports = FileInputEvent;