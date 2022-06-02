import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@material-ui/core/styles';
import {
    Avatar,
    ButtonBase,
    Drawer,
    Fab,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    IconButton,
    Radio,
    RadioGroup,
    Slider,
    Stack,
    Switch,
    TextField,
    Tooltip,
    Typography
} from '@material-ui/core';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import SubCard from '../../ui-component/cards/SubCard';
import AnimateButton from '../../ui-component/extended/AnimateButton';
import { MENU_TYPE, PRESET_COLORS, SET_BORDER_RADIUS, SET_FONT_FAMILY, SET_OUTLINED_FILLED } from '../../store/actions'; // THEME_RTL
import { gridSpacing } from '../../store/constant';

// color import
import colors from './../../assets/scss/_themes-vars.module.scss';
import theme1 from './../../assets/scss/_theme1.module.scss';
import theme2 from './../../assets/scss/_theme2.module.scss';
import theme3 from './../../assets/scss/_theme3.module.scss';
import theme4 from './../../assets/scss/_theme4.module.scss';
import theme5 from './../../assets/scss/_theme5.module.scss';
import theme6 from './../../assets/scss/_theme6.module.scss';

// assets
import { IconChecks, IconSettings } from '@tabler/icons';

// concat 'px'
function valueText(value) {
    return `${value}px`;
}

const PresetColor = ({ color, presetColor, setPresetColor }) => {
    return (
        <Grid item>
            <ButtonBase sx={{ borderRadius: '12px' }} onClick={() => setPresetColor(color.id)}>
                <Avatar
                    variant="rounded"
                    color="inherit"
                    sx={{
                        background: 'linear-gradient(135deg, ' + color.primary + ' 50%, ' + color.secondary + ' 50%)',
                        opacity: presetColor === color.id ? 0.6 : 1
                    }}
                >
                    {presetColor === color.id && <IconChecks color="#fff" />}
                </Avatar>
            </ButtonBase>
        </Grid>
    );
};

//-----------------------|| LIVE CUSTOMIZATION ||-----------------------//

const Customization = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);

    // drawer on/off
    const [open, setOpen] = React.useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    // state - layout type
    const [navType, setNavType] = React.useState(customization.navType);
    useEffect(() => {
        dispatch({ type: MENU_TYPE, navType: navType });
    }, [dispatch, navType]);

    // state - preset color
    const [presetColor, setPresetColor] = React.useState(customization.presetColor);
    useEffect(() => {
        dispatch({ type: PRESET_COLORS, presetColor: presetColor });
    }, [dispatch, presetColor]);

    // state - border radius
    const [borderRadius, setBorderRadius] = React.useState(customization.borderRadius);
    const handleBorderRadius = (event, newValue) => {
        setBorderRadius(newValue);
    };

    useEffect(() => {
        dispatch({ type: SET_BORDER_RADIUS, borderRadius: borderRadius });
    }, [dispatch, borderRadius]);

    // state - filled with outline textfield
    const [outlinedFilled, setOutlinedFilled] = React.useState(customization.outlinedFilled);
    const handleOutlinedFilled = (event) => {
        setOutlinedFilled(event.target.checked);
    };

    useEffect(() => {
        dispatch({ type: SET_OUTLINED_FILLED, outlinedFilled: outlinedFilled });
    }, [dispatch, outlinedFilled]);

    // state - RTL layout
    // const [rtlLayout, setRtlLayout] = React.useState(customization.rtlLayout);
    // const handleRtlLayout = (event) => {
    //     setRtlLayout(event.target.checked);
    // };

    if (customization.rtlLayout) {
        document.querySelector('body').setAttribute('dir', 'rtl');
    }

    // useEffect(() => {
    //     dispatch({ type: THEME_RTL, rtlLayout: rtlLayout });
    // }, [dispatch, rtlLayout]);

    let initialFont;
    switch (customization.fontFamily) {
        case `'Inter', sans-serif`:
            initialFont = 'Inter';
            break;
        case `'Poppins', sans-serif`:
            initialFont = 'Poppins';
            break;
        case `'Roboto', sans-serif`:
        default:
            initialFont = 'Roboto';
            break;
    }

    // state - font family
    const [fontFamily, setFontFamily] = React.useState(initialFont);
    useEffect(() => {
        let newFont;
        switch (fontFamily) {
            case 'Inter':
                newFont = `'Inter', sans-serif`;
                break;
            case 'Poppins':
                newFont = `'Poppins', sans-serif`;
                break;
            case 'Roboto':
            default:
                newFont = `'Roboto', sans-serif`;
                break;
        }
        dispatch({ type: SET_FONT_FAMILY, fontFamily: newFont });
    }, [dispatch, fontFamily]);

    const colorOptions = [
        {
            id: 'default',
            primary: theme.palette.mode === 'dark' ? colors.darkPrimaryMain : colors.primaryMain,
            secondary: theme.palette.mode === 'dark' ? colors.darkSecondaryMain : colors.secondaryMain
        },
        {
            id: 'theme1',
            primary: theme.palette.mode === 'dark' ? theme1.darkPrimaryMain : theme1.primaryMain,
            secondary: theme.palette.mode === 'dark' ? theme1.darkSecondaryMain : theme1.secondaryMain
        },
        {
            id: 'theme2',
            primary: theme.palette.mode === 'dark' ? theme2.darkPrimaryMain : theme2.primaryMain,
            secondary: theme.palette.mode === 'dark' ? theme2.darkSecondaryMain : theme2.secondaryMain
        },
        {
            id: 'theme3',
            primary: theme.palette.mode === 'dark' ? theme3.darkPrimaryMain : theme3.primaryMain,
            secondary: theme.palette.mode === 'dark' ? theme3.darkSecondaryMain : theme3.secondaryMain
        },
        {
            id: 'theme4',
            primary: theme.palette.mode === 'dark' ? theme4.darkPrimaryMain : theme4.primaryMain,
            secondary: theme.palette.mode === 'dark' ? theme4.darkSecondaryMain : theme4.secondaryMain
        },
        {
            id: 'theme5',
            primary: theme.palette.mode === 'dark' ? theme5.darkPrimaryMain : theme5.primaryMain,
            secondary: theme.palette.mode === 'dark' ? theme5.darkSecondaryMain : theme5.secondaryMain
        },
        {
            id: 'theme6',
            primary: theme.palette.mode === 'dark' ? theme6.darkPrimaryMain : theme6.primaryMain,
            secondary: theme.palette.mode === 'dark' ? theme6.darkSecondaryMain : theme6.secondaryMain
        }
    ];

    return (
        <React.Fragment>
            {/* toggle button */}

            <Tooltip title="Live Customize">
                <Fab
                    component="div"
                    onClick={handleToggle}
                    size="medium"
                    variant="string"
                    color="secondary"
                    sx={{
                        bottom: 0,
                        m: 4,
                        position: 'fixed',
                        right: 20,
                        zIndex: (theme) => theme.zIndex.speedDial,
                        boxShadow: theme.customShadows.secondary
                    }}
                >
                    <AnimateButton type="rotate">
                        <IconButton color="inherit">
                            <IconSettings />
                        </IconButton>
                    </AnimateButton>
                </Fab>
            </Tooltip>

            <Drawer
                anchor="right"
                onClose={handleToggle}
                open={open}
                PaperProps={{
                    sx: {
                        width: 280
                    }
                }}
            >
                <PerfectScrollbar component="div">
                    <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                        <Grid item xs={12}>
                            {/* layout type */}
                            <SubCard title="Layout">
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Mode</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-label="layout"
                                        value={navType}
                                        onChange={(e) => setNavType(e.target.value)}
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="light"
                                            control={<Radio />}
                                            label="Light"
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                                '& .MuiFormControlLabel-label': { color: 'grey.900' }
                                            }}
                                        />
                                        <FormControlLabel
                                            value="dark"
                                            control={<Radio />}
                                            label="Dark"
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                                '& .MuiFormControlLabel-label': { color: 'grey.900' }
                                            }}
                                        />
                                    </RadioGroup>
                                </FormControl>
                                {/* <FormControl component="fieldset" sx={{ mt: 2 }}>
                                    <FormLabel component="legend">Direction</FormLabel>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={rtlLayout}
                                                onChange={handleRtlLayout}
                                                inputProps={{ 'aria-label': 'controlled-direction' }}
                                            />
                                        }
                                        label="RTL"
                                    />
                                </FormControl> */}
                            </SubCard>
                        </Grid>
                        <Grid item xs={12}>
                            {/* Theme Preset Color */}
                            <SubCard title="Preset Color">
                                <Grid item container spacing={2} alignItems="center">
                                    {colorOptions.map((color, index) => {
                                        return (
                                            <PresetColor
                                                key={index}
                                                color={color}
                                                presetColor={presetColor}
                                                setPresetColor={setPresetColor}
                                            />
                                        );
                                    })}
                                </Grid>
                            </SubCard>
                        </Grid>
                        <Grid item xs={12}>
                            {/* font family */}
                            <SubCard title="Font Family">
                                <FormControl>
                                    <RadioGroup
                                        aria-label="font-family"
                                        value={fontFamily}
                                        onChange={(e) => setFontFamily(e.target.value)}
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="Roboto"
                                            control={<Radio />}
                                            label="Roboto"
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                                '& .MuiFormControlLabel-label': { color: 'grey.900' }
                                            }}
                                        />
                                        <FormControlLabel
                                            value="Poppins"
                                            control={<Radio />}
                                            label="Poppins"
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                                '& .MuiFormControlLabel-label': { color: 'grey.900' }
                                            }}
                                        />
                                        <FormControlLabel
                                            value="Inter"
                                            control={<Radio />}
                                            label="Inter"
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                                '& .MuiFormControlLabel-label': { color: 'grey.900' }
                                            }}
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </SubCard>
                        </Grid>
                        <Grid item xs={12}>
                            {/* border radius */}
                            <SubCard title="Border Radius">
                                <Grid item xs={12} container spacing={2} alignItems="center" sx={{ mt: 2.5 }}>
                                    <Grid item>
                                        <Typography variant="h6" color="secondary">
                                            4px
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Slider
                                            value={borderRadius}
                                            onChange={handleBorderRadius}
                                            getAriaValueText={valueText}
                                            valueLabelDisplay="on"
                                            aria-labelledby="discrete-slider-small-steps"
                                            marks
                                            step={2}
                                            min={4}
                                            max={24}
                                            color="secondary"
                                            sx={{
                                                '& .MuiSlider-valueLabel': {
                                                    color: 'secondary.main'
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6" color="secondary">
                                            24px
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </SubCard>
                        </Grid>
                        <Grid item xs={12}>
                            {/* filled with outline textfield */}
                            <SubCard title="Input Outlined With Filled">
                                <Grid item xs={12} container spacing={2} alignItems="center">
                                    <Grid item>
                                        <Stack spacing={2}>
                                            <Switch
                                                checked={outlinedFilled}
                                                onChange={handleOutlinedFilled}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                            <TextField
                                                fullWidth
                                                id="outlined-basic"
                                                label={outlinedFilled ? 'With Background' : 'Without Background'}
                                            />
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </SubCard>
                        </Grid>
                    </Grid>
                </PerfectScrollbar>
            </Drawer>
        </React.Fragment>
    );
};

export default Customization;
