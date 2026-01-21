
import * as Yup from 'yup';

export const registrationValidationSchema = Yup.object().shape({
  projectType: Yup.string().required('Debes seleccionar un tipo de proyecto'),
  name: Yup.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .required('El nombre es obligatorio'),
  category: Yup.string().required('Debes seleccionar una categoría'),
});

export const getStepOneInitialValues = () => ({
  projectType: 'negocio',
  name: '',
  category: 'comida',
});
