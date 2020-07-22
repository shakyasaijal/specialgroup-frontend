import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import PATHS from 'routes';

import SpecialGroupPagination from './SpecialGroupPagination';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const QuestionAnswers = (props) => {
  const comments = props.comments;

  // Loading effect
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // Loading Effect End

  const classes = useStyles();
  const [state, setState] = useState({ expanded: true, myQuestions: props.currentUserComments, question: '' });
  const [pagination, setPagination] = useState({ currentPage: 1, responsePerPage: 5 });

  // Get Comments
  const indexOfLastProduct = pagination.currentPage * pagination.responsePerPage;
  const indexOfFirstProduct = indexOfLastProduct - pagination.responsePerPage;
  const currentComments = comments.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePaginationChange = (event, value) => {
    setPagination({ ...pagination, currentPage: value });
  };

  const handleChange = () => {
    setState({ ...state, expanded: !state.expanded });
  };

  useEffect(() => {
    if (window.innerWidth <= 492) {
      setState({ ...state, expanded: false });
    }
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Loading Effect
    setOpen(true);
    // Loading Effect End

    setInterval(() => {
      const newQuestion = {
        question: state.question,
        answer: '',
        questionOn: 'July 04, 2020',
      };

      setState((state) => {
        const myQuestions = [newQuestion, ...state.myQuestions];

        return {
          ...state,
          myQuestions,
          question: '',
        };
      });
      // Loading Effect
      setOpen(false);
      // Loading Effect End
    }, 2000);
  };

  return (
    <div className={`mt30 ${classes.root}`}>
      <Accordion expanded={state.expanded} onChange={handleChange}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography className="q-a-typo">
            Questions and Answers
            {!props.isLoggedIn && (
              <div className="login-register">
                <Link to={PATHS.SIGNIN}>Login</Link> or <Link to={PATHS.SIGNUP}>Register</Link> to ask questions.
              </div>
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="comments-container">
            {props.isLoggedIn && (
              <div className="new-question">
                <form method="POST" onSubmit={(e) => handleSubmit(e)}>
                  <div className="grid">
                    <div className="field">
                      <textarea
                        className="input"
                        value={state.question}
                        onChange={(e) => setState({ ...state, question: e.target.value })}
                        placeholder="Enter your question here."
                      ></textarea>
                    </div>
                    <button type="submit" className="center vertical-center">
                      Ask Question
                    </button>
                  </div>
                  <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                    <CircularProgress color="inherit" />
                  </Backdrop>
                </form>
              </div>
            )}
            {props.isLoggedIn && props.currentUserComments.length > 0 && (
              <div className="my-question">
                <div className="title">My Questions</div>
                {state.myQuestions.map((comment, index) => (
                  <div className="comments" key={index}>
                    <div className="questions">
                      <div className="icon text-center">Q</div>
                      <div className="question">
                        {comment.question}
                        <div className="by">{comment.questionOn}</div>
                      </div>
                    </div>
                    <div className="responses">
                      <div className="icon text-center">A</div>
                      <div className="response">{comment.answer ? comment.answer : <b>No Reply Yet.</b>}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {comments.length > 0 ? (
              <>
                <div className="title">Other Questions</div>
                {currentComments.map((comment, index) => (
                  <div className="comments" key={index}>
                    <div className="questions">
                      <div className="icon text-center">Q</div>
                      <div className="question">
                        {comment.question}
                        <div className="by">
                          {comment.questionBy} - {comment.questionOn}
                        </div>
                      </div>
                    </div>
                    <div className="responses">
                      <div className="icon text-center">A</div>
                      <div className="response">{comment.answer ? comment.answer : <b>No Reply Yet.</b>}</div>
                    </div>
                  </div>
                ))}
                <div className="pagination">
                  <SpecialGroupPagination
                    responsePerPage={pagination.responsePerPage}
                    totalResponse={comments.length}
                    currentPage={pagination.currentPage}
                    handlePaginationChange={handlePaginationChange}
                  />
                </div>
              </>
            ) : (
              <div className="center">
                {props.currentUserComments.length < 1 && comments.length < 1 ? (
                  <h3>No Comments Yet.</h3>
                ) : comments.length < 1 ? (
                  <h3>No Other Comments</h3>
                ) : (
                  ''
                )}
              </div>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default QuestionAnswers;
