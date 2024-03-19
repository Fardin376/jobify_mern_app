/* eslint-disable react/prop-types */
import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ formBtn, isSubmittingText, isIdleText }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button
      type="submit"
      className={`btn btn-block ${formBtn && 'form-btn'}`}
      style={{ justifySelf: 'flex-end' }}
    >
      {isSubmitting ? isSubmittingText : isIdleText}
    </button>
  );
};
export default SubmitBtn;
