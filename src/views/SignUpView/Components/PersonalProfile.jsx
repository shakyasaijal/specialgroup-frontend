import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const PersonalProfile = () => {
  const classes = useStyles();

  const location = [
    {
      province: 'Province 1',
      location: ['Location A', 'Location B', 'Location C', 'Location D'],
    },
    {
      province: 'Province 2',
      location: ['Location A', 'Location B', 'Location C', 'Location D'],
    },
    {
      province: 'Province 3',
      location: ['Location A', 'Location B', 'Location C', 'Location D'],
    },
  ];

  return (
    <div className="personal-profile">
      <div className="profile-form center">
        <form className="form center">
          <div className="form-group">
            <label>Phone Number *</label>
            <input type="text" name="phone" autoComplete="off" />
          </div>
          <div className="form-group">
            <label>Location *</label>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="grouped-native-select">Select</InputLabel>
              <Select native defaultValue="" id="grouped-native-select">
                <option aria-label="None" value="" />
                {location.map((data, index) => (
                  <optgroup label={data.province} key={index}>
                    {data.location.map((data2, index2) => (
                      <option value={data2} key={index2}>
                        {data2}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="form-group">
            <label>Address *</label>
            <input type="text" name="phone" autoComplete="off" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalProfile;
