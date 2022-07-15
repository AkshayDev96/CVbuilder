import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import Input from '../layouts/Input'
import UploadIcon from '@mui/icons-material/Upload';
import EducationInput from './EducationInput';
import AddIcon from '@mui/icons-material/Add';
import validator from 'validator'
import WorkExInput from './WorkExInput';
import ProjectInput from './ProjectInput';
import SkillInput from './SkillInput';
import { GET_USER_INFO, UPDATE_CV_DETAILS, UPLOAD_FILE } from '../../api/endPoints';
import { getRequest, postRequest } from '../../api/index'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getUserData } from '../../helpers';

const Editor = () => {

    const [errors, setErrors] = useState()
    const navigate = useNavigate()

    const initialBasicDetails = {
        firstName: "",
        lastName: "",
        email: "",
        profilePic: "",
        address: "",
        careerObjective: "",
        contactNo: ""
    }

    const [basicDetails, setBasicDetails] = useState(initialBasicDetails)


    const initialEducation = {
        qualification: "",
        institution: "",
        board_university: "",
        percentage: "",
        division: ""
    }

    const initialWorkExp = {
        organization: "",
        joining_location: "",
        ctc: "",
        joining_date: "",
        leaving_date: "",
        technologies_worked_on: ""
    }

    const initialProject = {
        title: "",
        teamSize: "",
        duration: "",
        technologies: "",
        description: ""
    }

    const initialSkills = {
        name: "",
        percentage: ""
    }

    const initialSocialMedia = {
        facebook_link: "",
        youtube_link: "",
        github_link: "",
        linkedIn_link: ""
    }

    //pre set values
    useEffect(() => {
        try {
            const res = getRequest(GET_USER_INFO).then((res) => {
                if (res?.data?.data) {
                    const user = res?.data?.data
                    //     //set DB value to initial state
                    setBasicDetails({
                        firstName: user?.firstName,
                        lastName: user?.lastName,
                        email: user?.email,
                        address: user?.address,
                        careerObjective: user?.careerObjective,
                        contactNo: user?.contactNo,
                        profilePic: user?.profilePic
                    })
                    setEducationDetails(user?.educationDetails ? user?.educationDetails : [])
                    setWorkDetails(user?.workDetails ? user?.workDetails : [])
                    setProjectDetails(user?.projectDetails ? user?.projectDetails : [])
                    setSkillsDetails(user?.skillsDetails ? user?.skillsDetails : [])
                    setSocialMedia(user?.socialMedia ? user?.socialMedia : initialSocialMedia)
                }
            })
        } catch (e) {
            console.log(e?.response)
        }

        //cleanup states
        return ()=>{
            setBasicDetails(initialBasicDetails)
            setEducationDetails([])
            setWorkDetails([])
            setProjectDetails([])
            setSkillsDetails([])
            setSocialMedia(initialSocialMedia)
        }
    }, [])

    const [educationDetails, setEducationDetails] = useState([])
    const [projectDetails, setProjectDetails] = useState([])

    const [workDetails, setWorkDetails] = useState([])
    const [skillsDetails, setSkillsDetails] = useState([])

    const [socialMedia, setSocialMedia] = useState(initialSocialMedia)

    const inputHandlerBasic = (e) => {
        if (e.target.id == "raised-button-file") {
            if (e.target.files?.length > 0)
                setBasicDetails((state) => ({ ...state, profilePicFile: e.target.files[0] }))
        } else if (e.target.id == "contactNo") {
            setBasicDetails((state) => ({ ...state, [e.target.id]: validator.isNumeric(e.target.value + "") ? e.target.value : "" }))
        } else {
            setBasicDetails((state) => ({ ...state, [e.target.id]: e.target.value }))
        }
    }

    const inputHandlerSocial = (e) => {
        setSocialMedia((state) => ({ ...state, [e.target.id]: e.target.value }))
    }


    const inputHandleEducation = (index, data) => {
        const items = [...educationDetails]
        if (data?.target?.id == "percentage") {
            items[index][data.target.id] = validator.isFloat(data?.target?.value) && (parseFloat(data?.target?.value) < 100) ? data.target.value : ""
        } else {
            items[index][data.target.id] = data.target.value
        }
        setEducationDetails(items)
    }

    //addMoreEdu property
    const addMoreEdu = () => {
        setEducationDetails((state) => ([...state, initialEducation]))
    }

    //removeEdu item property
    const removeEduItem = (index) => {
        //removing property
        const items = educationDetails.filter((v, i) => i !== index)
        setEducationDetails(items)
    }

    //addMoreWorkDetails property
    const addMoreWork = () => {
        setWorkDetails((state) => ([...state, initialWorkExp]))
    }
    //removeWork item property
    const removeWorkItem = (index) => {
        //removing property
        const items = workDetails.filter((v, i) => i !== index)
        setWorkDetails(items)
    }

    //workInput handler property
    const inputHandleWork = (index, data) => {
        const items = [...workDetails]
        if (data?.target?.id == "percentage") {
            items[index][data.target.id] = validator.isFloat(data?.target?.value) && (parseFloat(data?.target?.value) < 100) ? data.target.value : ""
        } else {
            items[index][data.target.id] = data.target.value
        }
        setWorkDetails(items)
    }


    //addMoreProjectDetails property
    const addMoreProject = () => {
        setProjectDetails((state) => ([...state, initialProject]))
    }
    //removeProject item property
    const removeProjectItem = (index) => {
        //removing property
        const items = projectDetails.filter((v, i) => i !== index)
        setProjectDetails(items)
    }

    //projectInput handler property
    const inputHandleProject = (index, data) => {
        const items = [...projectDetails]
        if (data?.target?.id == 'teamSize') {
            items[index][data.target.id] = validator.isNumeric(data.target.value) ? data.target.value : ""
        } else {
            items[index][data.target.id] = data.target.value
        }
        setProjectDetails(items)
    }

    //addMoreSkillsDetails property
    const addMoreSkill = () => {
        setSkillsDetails((state) => ([...state, initialSkills]))
    }
    //removeSkills item property
    const removeSkillItem = (index) => {
        //removing property
        const items = skillsDetails.filter((v, i) => i !== index)
        setSkillsDetails(items)
    }

    //skillsInput handler property
    const inputHandleSkill = (index, data) => {
        const items = [...skillsDetails]
        if (data?.target?.id == "percentage") {
            items[index][data.target.id] = validator.isFloat(data?.target?.value) && (parseFloat(data?.target?.value) < 100) ? data.target.value : ""
        } else {
            items[index][data.target.id] = data.target.value
        }
        setSkillsDetails(items)
    }

    //uploadFile
    const uploadFile = (e) => {
        if (e?.target.files?.length > 0) {
            const formData = new FormData()
            formData.append('profile', e.target.files[0])
            postRequest(UPLOAD_FILE, formData)
                .then((response) => {
                    if (response?.data?.message) {
                        toast.success(response?.data?.message)
                        setBasicDetails((state) => ({ ...state, profilePic: response?.data?.data }))
                    }
                }).catch((e) => {
                    //if session outs
                    if (e?.response?.status == 404) {
                        setTimeout(() => navigate('/login'), 2000)
                    }
                    if (e?.response?.data?.errorMessage) {
                        toast.error(e.response?.data?.errorMessage)
                    }
                })
        }
    }

    const validateArrayField = (arr = []) => {
        let valid = true
        arr.map((item) => {
            Object.values(item).map((value) => {
                if ((value + "")?.length == 0) {
                    valid = false
                }
            })
        })
        return valid ? arr : []
    }

    const submit = () => {
        let payload = {
            firstName: basicDetails?.firstName,
            lastName: basicDetails?.lastName,
            email: basicDetails?.email,
            contactNo: basicDetails?.contactNo,
            address: basicDetails?.address,
            profilePic: basicDetails?.profilePic,
            careerObjective: basicDetails?.careerObjective,
            educationDetails: validateArrayField(educationDetails),
            workDetails: validateArrayField(workDetails),
            projectDetails: validateArrayField(projectDetails),
            skillsDetails: validateArrayField(skillsDetails),
            socialMedia: socialMedia
        }
        // console.log({payload})
        postRequest(UPDATE_CV_DETAILS, payload)
            .then((response) => {
                if (response?.data?.message) {
                    toast.success(response?.data?.message)
                }
            }).catch((e) => {
                //if session outs
                if (e?.response?.status == 404) {
                    setTimeout(() => navigate('/login'), 2000)
                }
                if (e?.response?.data?.errorMessage) {
                    toast.error(e.response?.data?.errorMessage)
                }
            })
    }

    return (
        <Layout>
            <div className='container'>
                <h4>Editor</h4>
                <div className='card pb-5' style={{ backgroundColor: '#000' }}>
                    <div className='row card-body'>
                        <h5>Basic Details</h5>
                        {/* Basic start Details */}
                        <div className='row'>
                            <div className='col-lg-4'>
                                <h5 className='text-white'>Profile pic</h5>
                                {
                                    basicDetails?.profilePic ? <div className='mb-1'>
                                        <img src={basicDetails?.profilePic} height={100} width={100} />
                                    </div> : null
                                }
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    type="file"
                                    onChange={uploadFile}
                                />
                                <label htmlFor="raised-button-file" className='mb-4'>
                                    <Button variant='contained' color='warning' endIcon={<UploadIcon />} component="span">
                                        update image
                                    </Button>
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <h5 className='text-white'>Basic details</h5>
                            <div className='col-lg-4'>
                                <Input
                                    type={'text'}
                                    value={basicDetails?.firstName}
                                    id={'firstName'}
                                    label={'First name'}
                                    placeholder={'First name'}
                                    error={errors?.firstName}
                                    inputHandler={inputHandlerBasic}
                                />
                            </div>
                            <div className='col-lg-4'>
                                <Input
                                    type={'text'}
                                    value={basicDetails?.lastName}
                                    id={'lastName'}
                                    label={'Last name'}
                                    placeholder={'Last name'}
                                    error={errors?.lastName}
                                    inputHandler={inputHandlerBasic}
                                />
                            </div>
                            <div className='col-lg-4'>
                                <Input
                                    type={'email'}
                                    value={basicDetails?.email}
                                    id={'email'}
                                    label={'Email'}
                                    placeholder={'Email'}
                                    error={errors?.email}
                                    inputHandler={inputHandlerBasic}
                                />
                            </div>
                            <div className='col-lg-4 mt-3 mb-1'>
                                <Input
                                    type={'text'}
                                    value={basicDetails?.contactNo}
                                    id={'contactNo'}
                                    inputProps={{ maxLength: 10 }}
                                    label={'Contact number'}
                                    placeholder={'Contact number here'}
                                    error={errors?.contactNo}
                                    inputHandler={inputHandlerBasic}
                                />
                            </div>
                            <div className='col-lg-4 mt-3 mb-1'>
                                <Input
                                    type={'text'}
                                    value={basicDetails?.address}
                                    id={'address'}
                                    label={'Address'}
                                    placeholder={'Address here'}
                                    error={errors?.address}
                                    inputHandler={inputHandlerBasic}
                                />
                            </div>
                            <div className='col-lg-4 mt-3 mb-1'>
                                <Input
                                    type={'text'}
                                    value={basicDetails?.careerObjective}
                                    id={'careerObjective'}
                                    label={'Career Objective'}
                                    placeholder={'Career Objective here'}
                                    error={errors?.careerObjective}
                                    inputHandler={inputHandlerBasic}
                                />
                            </div>
                        </div>
                        {/* Basic end Details */}

                        {/* education start Details */}
                        <div className='row mt-4'>
                            <div className='col-lg-12'>
                                <h5 className='text-white'>Education details</h5>
                                {
                                    educationDetails?.map((edu, index) => (
                                        <EducationInput edu={edu} key={index} removeItem={() => removeEduItem(index)} inputHandleEducation={(data) => inputHandleEducation(index, data)} />
                                    ))
                                }
                                <div className='mt-3 mb-3'>
                                    <Button variant='contained' color='warning' endIcon={<AddIcon />} size='small' onClick={addMoreEdu}>Add education details</Button>
                                </div>
                            </div>
                        </div>
                        {/* education end Details */}
                        {/* Work start Details */}
                        <div className='row mt-4'>
                            <div className='col-lg-12'>
                                <h5 className='text-white'>Work experience</h5>
                                {
                                    workDetails?.map((work, index) => (
                                        <WorkExInput work={work} key={index} removeItem={() => removeWorkItem(index)} inputHandleWork={(data) => inputHandleWork(index, data)} />
                                    ))
                                }
                                <div className='mt-3 mb-3'>
                                    <Button variant='contained' color='warning' endIcon={<AddIcon />} size='small' onClick={addMoreWork}>Add work details</Button>
                                </div>
                            </div>
                        </div>
                        {/* Work end Details */}

                        {/* Project start Details */}
                        <div className='row mt-4'>
                            <div className='col-lg-12'>
                                <h5 className='text-white'>Projects worked on</h5>
                                {
                                    projectDetails?.map((project, index) => (
                                        <ProjectInput data={project} key={index} removeItem={() => removeProjectItem(index)} inputHandle={(data) => inputHandleProject(index, data)} />
                                    ))
                                }
                                <div className='mt-3 mb-3'>
                                    <Button variant='contained' color='warning' endIcon={<AddIcon />} size='small' onClick={addMoreProject}>Add project details</Button>
                                </div>
                            </div>
                        </div>
                        {/* Project end Details */}

                        {/* Skill start Details */}
                        <div className='row mt-4'>
                            <div className='col-lg-12'>
                                <h5 className='text-white'>Skills</h5>
                                {
                                    skillsDetails?.map((skill, index) => (
                                        <SkillInput data={skill} key={index} removeItem={() => removeSkillItem(index)} inputHandle={(data) => inputHandleSkill(index, data)} />
                                    ))
                                }
                                <div className='mt-3 mb-3'>
                                    <Button variant='contained' color='warning' endIcon={<AddIcon />} size='small' onClick={addMoreSkill}>Add skill details</Button>
                                </div>
                            </div>
                        </div>
                        {/* Skill end Details */}

                        {/* social link start Details */}
                        <div className='row mt-4'>
                            <div className='col-lg-12'>
                                <h5 className='text-white'>Social links</h5>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <Input
                                            type={'text'}
                                            value={socialMedia?.facebook_link}
                                            id={"facebook_link"}
                                            label={'Facebook link'}
                                            placeholder={'Facebook link'}
                                            inputHandler={inputHandlerSocial}
                                        />
                                    </div>
                                    <div className='col-lg-4'>
                                        <Input
                                            type={'text'}
                                            value={socialMedia?.github_link}
                                            id={"github_link"}
                                            label={'Github link'}
                                            placeholder={'Github link'}
                                            inputHandler={inputHandlerSocial}
                                        />
                                    </div>
                                    <div className='col-lg-4'>
                                        <Input
                                            type={'text'}
                                            value={socialMedia?.linkedIn_link}
                                            id={"linkedIn_link"}
                                            label={'LinkedIn link'}
                                            placeholder={'LinkedIn link'}
                                            inputHandler={inputHandlerSocial}
                                        />
                                    </div>
                                    <div className='col-lg-4 mt-4'>
                                        <Input
                                            type={'text'}
                                            value={socialMedia?.youtube_link}
                                            id={"youtube_link"}
                                            label={'Youtube link'}
                                            placeholder={'Youtube link'}
                                            inputHandler={inputHandlerSocial}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* social link end Details */}
                    </div>
                    <div className='col-lg-12'>
                        <Button variant='contained' onClick={submit} sx={{ display: 'block', margin: 'auto' }} color='warning'>Save details</Button>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Editor