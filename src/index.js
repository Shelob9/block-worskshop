import { registerBlockType } from "@wordpress/blocks";
import { createElement, Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { TextControl } from "@wordpress/components";
import { InspectorControls } from "@wordpress/editor";

registerBlockType("josh/block-workshop", {
  title: __("Hi Roy Block"),
  category: "widgets",
  attributes: {
    message: {
      type: "string",
      default: "Hi Roy"
    }
  },
  supports: {
    html: false
  },
  edit({ className, attributes, setAttributes, isSelected }) {
    //Current message
    const { message } = attributes;
    //Function to update message
    const updateMessage = message => setAttributes({ message });
    return (
      <div className={className}>
        <InspectorControls>
          <TextControl
            value={message}
            onChange={updateMessage}
            label={__("Set Message")}
          />
        </InspectorControls>
        <Fragment>
          <p>{message}</p>
        </Fragment>
      </div>
    );
  },
  save({ className, attributes }) {
    const { message } = attributes;
    return (
      <div className={className}>
        <p>{message}</p>
      </div>
    );
  }
});
