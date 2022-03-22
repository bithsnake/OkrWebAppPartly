import React from "react";
import { useEffect, useRef, useState } from "react";
import { ObjectiveFormMode } from "../../enums/enums";
import { INewObjectiveItem } from "../../interfaces/componentinterfaces";
import { IOkrObjective } from "../../interfaces/OkrInterfaces";
import YesNoModal from "./YesNoModal";

let okrobj: IOkrObjective = {
    periodId: 0,
    id: 0,
    title: "",
    okrDescription: {
        title : "",
        subtitle: "",
        icon : "fa-chart"
    }
}

const MaxLength: number = 60;
const NewObjectiveItem  : React.FunctionComponent<INewObjectiveItem> = (props) => {
    const titleRef = useRef(HTMLInputElement.prototype);
    const descriptionTitleRef = useRef(HTMLInputElement.prototype);
    const descriptionSubtitleRef = useRef(HTMLInputElement.prototype);
    
    const [title, setTitle] = useState<string>(props.title !== undefined ? props.title : "");
    const [descriptionTitle, setDescriptionTitle] = useState<string>(props.descriptiontitle !== undefined ? props.descriptiontitle : "");
    const [descriptionSubtitle, setDescriptionSubTitle] = useState<string>(props.descriptionsubtitle !== undefined ? props.descriptionsubtitle : "");
    const [descriptionIcon, setDescriptionIcon] = useState<string>(props.descriptionsicon !== undefined ? props.descriptionsicon : "");
    
    const [id, setId] = useState<number>(props.id === undefined ? 0 : props.id);
    const [ShowDeletePrompt, setShowDeletePrompt] = useState<boolean>(false);

    useEffect(() => {
        setId(() => id);
    },[id])
    const OnChange = () => {
        okrobj.id = id;
        okrobj.periodId = +props.PeriodIndex;
        okrobj.title = titleRef.current.value;
        okrobj.okrDescription.title = descriptionTitleRef.current.value;
        okrobj.okrDescription.subtitle = descriptionSubtitleRef.current.value;
        okrobj.okrDescription.icon = descriptionIcon;

        setTitle(()=> titleRef.current.value);
        setDescriptionTitle(()=> descriptionTitleRef.current.value);
        setDescriptionSubTitle(() => descriptionSubtitleRef.current.value);
        setDescriptionIcon(() => okrobj.okrDescription.icon);
        if (
            okrobj.title !== '' && okrobj.okrDescription.title !== '' && okrobj.okrDescription.subtitle !== '' &&
            okrobj.title.length > props.OkrItemLengths.MinObjectivesTitleLength && okrobj.okrDescription.title.length > props.OkrItemLengths.MinObjectivesDescriptionTitleLength  && okrobj.okrDescription.subtitle.length > props.OkrItemLengths.MinObjectivesDescriptionSubtitleLength
        ) { props.OnCanCreate(true, okrobj); } else { props.OnCanCreate(false, okrobj); }
        props.OnChangeObjective(okrobj)
    };   
    // set focus on first input field
    useEffect(() => {
        titleRef.current.focus();
    }, [props.OkrObject.length]);

    // deletes an item in add mode
    const DeleteItemAddMode = () => {
        if (props.OnDeleteItem === undefined) return;
        props.OnDeleteItem(id);
  };
    // deletes an item in edit mode , this removes an item from the database too
    const DeleteItemEditMode = (deleteItem: boolean | undefined) => {
        if (deleteItem) {
            if (props.OnDeleteItem === undefined) return;
            props.OnDeleteItem(id);
        }
        setShowDeletePrompt(() => false);
    };
    const DeletePromptHandler = () => {
        setShowDeletePrompt(() => true);
    }
    const TextColor = (textlength: number): string => {
        return `relative ${textlength === MaxLength ? "text-red-600" : "text-blue-600"} text-sm place-self-end`;
    }
    return (
      <>

      </>
    );
}
export default React.memo(NewObjectiveItem);